import { Injectable } from '@angular/core';
import { Router }       from '@angular/router';
import { UserService } from '../user/user.service';
import { AlertService } from '../alert/alert.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(
        private router: Router, private userService: UserService, private alertService: AlertService) { }
 
    login(username, password) {
        this.userService.logIn(username, password).then(
            (user) => {
                this.alertService.success('Welcome.', true);
                this.router.navigate(['/']);
            })
            .catch((error) => {
                this.alertService.error(error.message);
                console.error(JSON.stringify(error))
            });
    }
 
    logout() {
        this.userService.logOut();
    }
}
