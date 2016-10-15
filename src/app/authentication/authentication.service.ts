import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    constructor(private userService: UserService) { }
 
    login(username, password) {
        this.userService.logIn(username, password).then(
            (user) => {
                localStorage.setItem('currentUser', user);
            })
            .catch((error) => console.error(error))
        }
 
    logout() {
        // ToDo: Implement parse logout logic
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
