import {Component}      from '@angular/core';
import {UserService}    from '../user/user.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    
    constructor(private _userService: UserService) {
                
    }

    public logOut(){        
        if(this._userService.getCurrentUser()){
            this._userService.logOut();
        }
    }

}