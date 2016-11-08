import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {


    constructor(private _userService: UserService) {
    }

    public logOut() {
        if (this._userService.getCurrentUser()) {
            this._userService.logOut();
        }
    }

    public ngOnInit() {
    }

    public ngOnDestroy() {
    }


}