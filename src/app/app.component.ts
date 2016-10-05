import { Component } from '@angular/core';
import {BidService} from './bid/bid.service';
import {ParseService} from './parse/parse.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 
  
  constructor(private parseService: ParseService, private bidService: BidService){
    parseService.initParseConnection('kvn+?QM6h)^5m.4t','http://localhost:1337/parse');
    bidService.getBids()
      .then((results) => console.log(JSON.stringify(results)))
      .catch((error) => console.error(error));
      
  }

 }
