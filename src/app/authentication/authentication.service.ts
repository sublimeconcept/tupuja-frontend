import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { AlertService } from '../alert/alert.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private userService: UserService, private alertService: AlertService) { }
 
    login(username, password) {
        this.userService.logIn(username, password).then(
            (user) => {

                console.log("user = " + user);
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
