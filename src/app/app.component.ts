import { Component } from '@angular/core';
import {BidService} from './bid/bid.service';
import {ParseComponent} from './parse/parse.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 
  
  constructor(private parseComponent: ParseComponent, private bidService: BidService){
    parseComponent.initParseConnection('kvn+?QM6h)^5m.4t','http://localhost:1337/parse');
    bidService.getBids()
      .then((results) => console.log(JSON.stringify(results)))
      .catch((error) => console.error(error));
      
  }

 }
