import { Component }    from '@angular/core';
import { Router }       from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { UserService }  from '../user/user.service';
import {NgForm}         from '@angular/forms';
 
@Component({
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
 
    register(f: NgForm) {
        this.loading = true;
        console.log("model = " + this.model);
        this.userService.create(this.model)
            .then((user)=>{
                    //for now lets just use logout 
                    //because at this point we don't want to persist
                    //any session data on the browser nor the server
                    //because we are asking the user to 
                    //verify its email
                    this.userService.logOut();
                    f.resetForm();
                    this.router.navigate(['/login']);
                }
            ).catch((error) => {
                this.alertService.error(error.message);
                console.error(error);
                this.loading = false;
            });
        
    }
}