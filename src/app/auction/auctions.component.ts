import { Component } from '@angular/core';
import { AuctionService } from './auction.service'

@Component({
    selector: "auctions",
    template: `
        <ul>
            <li *ngFor="let auction of auctions">
                {{auction.attributes.name}}: {{auction.attributes.starting_price}}
            </li>
        </ul>
        `,
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