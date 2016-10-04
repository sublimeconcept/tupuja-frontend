import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ParseService} from './parse/parse.service';
import {BidService} from './bid/bid.service';


@NgModule({
  imports: [BrowserModule],
  providers: [BidService, ParseService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
