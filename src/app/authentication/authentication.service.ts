import { Injectable } from              '@angular/core';
import { Router }       from            '@angular/router';
import { UserService } from             '../user/user.service';
import { Observable } from              'rxjs/Observable';
import                                  'rxjs/add/operator/map';
import { FlashMessagesService } from    'angular2-flash-messages';

@Injectable()
export class AuthenticationService {
    constructor(
        private router: Router, private userService: UserService, private _flashMessagesService: FlashMessagesService) { }
 
    login(username, password) {
        this.userService.logIn(username, password).then(
            (user) => {
                this._flashMessagesService.show('Bienvenido.', {cssClass: 'alert-success',timeout:3000});
                this.router.navigate(['/']);
            })
            .catch((error) => {
                this._flashMessagesService.show(error.message,{cssClass: 'alert-danger',timeout:3000});
                console.error(JSON.stringify(error));
            });
    }
 
    logout() {
        this.userService.logOut();
    }
}
