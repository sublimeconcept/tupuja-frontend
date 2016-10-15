import { Component } from '@angular/core';
import {BidService} from './bid/bid.service';
import {UserService} from './user/user.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 

  constructor(private userService: UserService){
  }

 }
