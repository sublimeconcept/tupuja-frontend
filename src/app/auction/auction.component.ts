import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user/user.service';
import { BidService } from '../bid/bid.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: "auction",
    templateUrl: "./auction.component.html",
})
export class AuctionComponent implements OnInit, OnDestroy{

    private userSignedIn: boolean = false;
    private subscription: Subscription;
    private currentUser: any = {};

    @Input() private auction: any;

    constructor(private _userService: UserService,
                private bidService: BidService,
                private _flashMessagesService: FlashMessagesService) {
        let user = _userService.getCurrentUser();
        if(user){
            this.currentUser = user;
            this.userSignedIn = true;
        }
    }

    public bid() {
        this.currentUser.fetch(); // REMOTE THIS WHEN WE HAVE A WAY OF ADDING CREDITS
        console.log("this.currentUser.get('credits') = " + this.currentUser.get('credits'));
        if ( this.currentUser.get('credits') <= 0 ) {
            this._flashMessagesService.show("No tienes suficientes créditos.", { cssClass: 'alert-danger', timeout: 5000 });
        } else {
            this.bidService.bidAuction(this.currentUser, this.auction).then(
                (bid) => {
                    // BEGIN: THIS SHOULD OCCUR IN PARSE SERVER
                    this.currentUser.increment('credits', -1);
                    this.currentUser.save();
                    this.auction.increment("bids");
                    this.auction.increment("currentPrice", 0.01);
                    let newTime: Date = this.auction.get("endDate");
                    newTime.setMinutes(newTime.getMinutes() + 1);
                    this.auction.set("endDate", newTime);
                    this.auction.save();
                    // END: THIS SHOULD OCCUR IN PARSE SERVER
                    this.auction.fetch();
                    this.currentUser.fetch();
                    this._flashMessagesService.show("Subasta Exitosa", { cssClass: 'alert-success', timeout: 2000 });
                }).catch(
                    (error) => {
                        this._flashMessagesService.show(error.message, { cssClass: 'alert-danger', timeout: 5000 });

                    }
                );
        }
    }

    public onAuctionFinished(event){
        console.log(event);
    }

    public ngOnInit() {
        this.determineUserSignedIn();
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
        this.currentUser = null;
        this.userSignedIn = false;
    }


    public determineUserSignedIn() {
        this.subscription = this._userService.userLoggedIn.subscribe(
            user => {
                if (user) {
                    this.currentUser = user;
                    this.userSignedIn = true;
                }
            }
        );
    }

    public isUserSignedIn() {
        return this.userSignedIn;
    }

}