import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuctionComponent } from './auction/auction.component';
import {AuctionService} from './auction/auction.service';
import { Deferred } from './utils/util.deferred';
import {routing} from './app.routing';

import {ParseWrapper} from './parse/parse.wrapper';
import {BidService} from './bid/bid.service';
import {UserService} from './user/user.service';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AutionListComponent} from './auction/auction-list.component';


@NgModule({
  imports: [BrowserModule, routing],
  providers: [BidService, ParseWrapper, AuctionService, UserService],
  declarations: [AppComponent, AuctionComponent, NavbarComponent,HomeComponent, ProfileComponent,AutionListComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
