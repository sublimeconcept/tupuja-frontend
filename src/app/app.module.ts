import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuctionComponent } from './auction/auction.component';
import {AuctionService} from './auction/auction.service';
import { Deferred } from './utils/util.deferred';
import {routing} from './app.routing';

import {BidService} from './bid/bid.service';
import {UserService} from './user/user.service';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AutionListComponent} from './auction/auction-list.component';
import {CountdownComponent} from './generics/countdown.component';
import {RegisterComponent} from './register/register.component';

const declarations = [
  AppComponent, 
  AuctionComponent, 
  NavbarComponent, 
  HomeComponent, 
  ProfileComponent,
  AutionListComponent,
  CountdownComponent,
  RegisterComponent
];

const imports = [
  BrowserModule,
  routing,
  FormsModule
];

const providers = [
  BidService, 
  AuctionService, 
  UserService
]

@NgModule({
  imports: imports,
  providers: providers,
  declarations: declarations,
  bootstrap: [AppComponent]
})
export class AppModule {

}
