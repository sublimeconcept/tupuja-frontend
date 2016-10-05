import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuctionsComponent } from './auction/auctions.component';
import {AuctionService} from './auction/auction.service';
import { Deferred } from './utils/util.deferred';

import {ParseWrapper} from './parse/parse.wrapper';
import {BidService} from './bid/bid.service';


@NgModule({
  imports: [BrowserModule],
  providers: [BidService, ParseWrapper, AuctionService],
  declarations: [AppComponent, AuctionsComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
