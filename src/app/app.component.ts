import { Component } from '@angular/core';
import {BidService} from './bid/bid.service';
import {ParseWrapper} from './parse/parse.wrapper';
import {UserService} from './user/user.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 
  
  constructor(private parse: ParseWrapper, private userService: UserService){
    parse.initParseConnection('kvn+?QM6h)^5m.4t','http://localhost:1337/parse');
    userService.getUserById('cantwait')
      .then((user) => {
        console.log(user)
      })
      .catch((err) => console.error(err));
    }

 }
