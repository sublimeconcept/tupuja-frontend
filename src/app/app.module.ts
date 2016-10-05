import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParseService } from './parse/parse.service';
import { AuctionsComponent } from './auction/auctions.component';
import { Deferred } from './utils/util.deferred';

@NgModule({
  imports: [BrowserModule],
  providers: [ParseService, Deferred],
  declarations: [AppComponent, AuctionsComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
