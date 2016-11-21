import { Component } from '@angular/core';
import {UserService} from './user/user.service';
import 'jquery';
import 'bootstrap-loader';



@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  constructor(private userService: UserService){
  }

 }
