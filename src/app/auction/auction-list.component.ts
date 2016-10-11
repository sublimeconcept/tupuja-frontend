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
                this.auctions = auctions;
                console.log(auctions)
            })
            .catch((error) => console.error(error))
    }
}