import { Component } from '@angular/core';
import { AuctionService } from './auction.service'

@Component({
    selector: "auctions",
    templateUrl: "auctions.template",
    providers: [AuctionService]
})
export class AuctionsComponent {
    auctions;
    constructor(private auctionService: AuctionService) {
        auctionService.getAuctions()
        .then((auctions) => this.auctions = auctions)
        .catch((error) => console.error(error))
    }
}