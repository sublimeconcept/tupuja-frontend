import {Component} from '@angular/core';
import { AuctionService } from './auction.service'

@Component({
    selector: "auction-list",
    templateUrl: "./auction-list.component.html",
})
export class AutionListComponent {

    private auctions: any[] = [];

    constructor(private auctionService: AuctionService){
        console.log("fetching auctions")
        this.auctionService.getAuctions()
            .then((auctions) => {
                this.extractAuctions(auctions);
                console.log(this.auctions)
            })
            .catch((error) => console.error(error))
    }

    extractAuctions(_auctions: any) {
        for (let auctionData of _auctions) {
            this.auctions.push(auctionData.attributes);
        }
    }
}