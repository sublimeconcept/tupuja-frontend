import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuctionsComponent } from './auction/auctions.component';
import {AuctionService} from './auction/auction.service';
import { Deferred } from './utils/util.deferred';
import {routing} from './app.routing';

import {ParseWrapper} from './parse/parse.wrapper';
import {BidService} from './bid/bid.service';
import {UserService} from './user/user.service';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';


@NgModule({
  imports: [BrowserModule, routing],
  providers: [BidService, ParseWrapper, AuctionService, UserService],
  declarations: [AppComponent, AuctionsComponent, NavbarComponent,HomeComponent, ProfileComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
