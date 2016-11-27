import { Component, OnInit, OnDestroy, Input,ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user/user.service';
import { BidService } from '../bid/bid.service';
import { AuctionService } from  './auction.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: "auction",
    templateUrl: "./auction.component.html"
    //,
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionComponent implements OnInit, OnDestroy{

    
    private auctionSubscription: any;

    @Input('auction') private auction;

    constructor(private _auctionService: AuctionService,
                private _userService: UserService,
                private bidService: BidService,
                private _flashMessagesService: FlashMessagesService) {
    }

    public bid() {
        //this.currentUser.fetch(); // REMOTE THIS WHEN WE HAVE A WAY OF ADDING CREDITS
        if ( this._userService.getCurrentUser().get('credits') <= 0 ) {
            this._flashMessagesService.show("No tienes suficientes créditos.", { cssClass: 'alert-danger', timeout: 5000 });
        } else {
            this.bidService.bidAuction(this._userService.getCurrentUser(), this.auction).then(
                (bid) => {
                    // BEGIN: THIS SHOULD OCCUR IN PARSE SERVER
                    this._auctionService.updateAuction(this.auction);
                    //code moved to parse server as a cloud function
                    //this._userService.getCurrentUser().increment('credits', -1);
                    //this._userService.getCurrentUser().save();
                    //this.auction.increment("bids");
                    //this.auction.increment("currentPrice", 0.01);
                    //let newTime: Date = this.auction.get("endDate");
                    //newTime.setMinutes(newTime.getMinutes() + 1);
                    //this.auction.set("endDate", newTime);
                    //this.auction.save();
                    // END: THIS SHOULD OCCUR IN PARSE SERVER
                    this._userService.getCurrentUser().fetch();
                    this._flashMessagesService.show("Subasta Exitosa", { cssClass: 'alert-success', timeout: 2000 });
                }).catch(
                    (error) => {
                        this._flashMessagesService.show(error.message, { cssClass: 'alert-danger', timeout: 5000 });

                    }
                );
        }
    }

    private onAuctionFinished(event){
        if(event){
            this.auction.set("finished", true);
            this.auction.save();
        }
    }    

    public ngOnInit() {
        this.auctionSubscription = this._auctionService
                                        .getAuctionSubscription(this.auction.id)
                                        .subscribe();
        this.auctionSubscription.on('update', (object)=> {
            this.auction = object;
        });
    }

    public ngOnDestroy() {
        this.auctionSubscription.unsubscribe();
    }

}