import {Component} from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
  currentUser;

    constructor(private userService: UserService){
        this.currentUser = localStorage.getItem('currentUser');
        console.log("here loading current = " + this.currentUser);
    }

}