import {Component, OnInit, OnDestroy}       from '@angular/core';
import {UserService}                        from '../user/user.service';
import {AlertService}                       from '../alert/alert.service';
import { Subscription }                     from 'rxjs/Subscription';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {

    private userSignedIn: boolean = false;
    subscription: Subscription;
    
    constructor(private _userService: UserService, private alertService: AlertService) {
    }

    public logOut(){        
        if(this._userService.getCurrentUser()){
            this.alertService.success("Hasta luego");
            this._userService.logOut();
        }
    }

    public ngOnInit(){
        this.determineUserSignedIn();
    }

    public ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    public currentUser() {
        return this._userService.currentUser();
    }

    public determineUserSignedIn(){
        this.subscription = this._userService.userLoggedIn.subscribe( 
                result => {
                    this.userSignedIn = result;
                } 
            );
    }

    public isUserSignedIn() {
        return this.userSignedIn;        
    }

}