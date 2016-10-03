import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BidService} from './bid/bid.service';

@NgModule({
  imports: [BrowserModule],
  providers: [BidService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
