import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BidService} from './bid/bid.service';
import {UserService} from './user/user.service';


@NgModule({
  imports: [BrowserModule],
  providers: [BidService, UserService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
