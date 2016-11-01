import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {

    private userSignedIn: boolean = false;
    subscription: Subscription;
    private currentUser: any = {};

    constructor(private _userService: UserService) {
        let user = _userService.getCurrentUser();
        if(user){
            this.currentUser = user;
            this.userSignedIn = true;
        }
    }

    public logOut() {
        if (this._userService.getCurrentUser()) {
            this._userService.logOut();
        }
    }

    public ngOnInit() {
        this.determineUserSignedIn();
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
        this.currentUser = null;
        this.userSignedIn = false;
    }


    public determineUserSignedIn() {
        this.subscription = this._userService.userLoggedIn.subscribe(
            user => {
                if (user) {
                    this.currentUser = user;
                    this.userSignedIn = true;
                }
            }
        );
    }

    public isUserSignedIn() {
        return this.userSignedIn;
    }

}