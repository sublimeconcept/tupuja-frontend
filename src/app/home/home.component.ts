import {Component} from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
  

    constructor(private userService: UserService){
        
    }

}