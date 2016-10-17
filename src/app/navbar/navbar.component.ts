import {Component}      from '@angular/core';
import {UserService}    from '../user/user.service';
import {AlertService}   from '../alert/alert.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    
    constructor(private _userService: UserService, private alertService: AlertService) {
    }

    public logOut(){        
        if(this._userService.getCurrentUser()){
            this.alertService.success("Hasta luego");
            this._userService.logOut();
        }
    }

    public currentUser() {
        return this._userService.currentUser();
    }

    public userSignedIn() {
        return this._userService.getCurrentUser();
    }

}