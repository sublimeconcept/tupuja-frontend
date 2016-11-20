import { Component } from '@angular/core';
import {UserService} from './user/user.service';
import 'jquery';
import 'bootstrap-loader';
import 'bootswatch-sass';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  constructor(private userService: UserService){
  }

 }
