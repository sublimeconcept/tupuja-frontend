import {Component} from '@angular/core';
import { AuctionService } from './auction.service'

@Component({
    selector: "auction-slider",
    templateUrl: "./auction-slider.component.html",
})
export class AutionSliderComponent {

    private auctions: any[] = [];

    constructor(private auctionService: AuctionService){
        this.auctionService.getAuctions()
            .then((auctions) => {
                this.auctions = auctions;
            })
            .catch((error) => console.error(error))
    }
}
