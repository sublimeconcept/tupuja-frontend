import { Component } from '@angular/core';
import { ParseService } from './parse/parse.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 
  
  constructor(private parseService: ParseService){
    parseService.initParseConnection('kvn+?QM6h)^5m.4t','http://localhost:1337/parse');
  }

 }
