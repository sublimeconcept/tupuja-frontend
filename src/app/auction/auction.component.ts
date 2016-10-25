import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../alert/alert.service';
import { UserService } from '../user/user.service';
import { BidService } from '../bid/bid.service';

@Component({
    selector: "auction",
    templateUrl: "./auction.component.html",
})
export class AuctionComponent implements OnInit, OnDestroy{

    private userSignedIn: boolean = false;
    subscription: Subscription;
    private currentUser: any = {};

    @Input() private auction: any;

    constructor(private _userService: UserService, private alertService: AlertService, private bidService: BidService) {
        let user = _userService.getCurrentUser();
        if(user){
            this.currentUser = user;
            this.userSignedIn = true;
        }
    }

    public bid() {
        this.bidService.bidAuction(this.currentUser, this.auction).then(
            (bid) => {
                // THIS SHOULD OCCUR IN PARSE SERVER
                this.auction.increment("bids");
                this.auction.increment("currentPrice", 0.01);
                this.auction.save();
                this.alertService.success("Subastado con éxito!");
                // THIS SHOULD OCCUR IN PARSE SERVER
            }).catch(
                (error) => {
                    this.alertService.error(error.message);
                }
            );
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