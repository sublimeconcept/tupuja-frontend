import { Component }    from '@angular/core';
import { Router }       from '@angular/router';
import { UserService }  from '../user/user.service';
import {NgForm}         from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
 
@Component({
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private _flashMessagesService: FlashMessagesService) { }
 
    register(f: NgForm) {
        this.loading = true;
        console.log("model = " + this.model);
        this.model.username = this.model.email;
        this.userService.create(this.model)
            .then((user)=>{
                    //for now lets just use logout 
                    //because at this point we don't want to persist
                    //any session data on the browser nor the server
                    //because we are asking the user to 
                    //verify its email
                    this.userService.logOut();
                    f.resetForm();
                    this._flashMessagesService.show('Registro Exitoso, por favor verifique su correo.', { cssClass: 'alert-success', timeout: 3000 });
                    this.router.navigate(['/']);
                }
            ).catch((error) => {
                this._flashMessagesService.show(error.message, { cssClass: 'alert-danger', timeout: 5000 });
                this.loading = false;
            });
        
    }
}