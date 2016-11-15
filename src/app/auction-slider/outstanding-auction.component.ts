import { Component, OnInit, OnDestroy, Input,ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user/user.service';
import { BidService } from '../bid/bid.service';
import { AuctionService } from  '../auction/auction.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuctionComponent } from  '../auction/auction.component';

@Component({
    selector: "outstanding-auction",
    templateUrl: "./outstanding-auction.component.html",
    styleUrls: ['outstanding-auction.component.css']
})
export class OutstandingAuctionComponent extends AuctionComponent implements OnInit, OnDestroy {
    constructor(private __auctionService: AuctionService,
                private __userService: UserService,
                private _bidService: BidService,
                private __flashMessagesService: FlashMessagesService) {
        super(__auctionService, __userService, _bidService, __flashMessagesService);
    }
}