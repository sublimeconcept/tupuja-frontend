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
        private userService: UserService) { }
 
    register(f: NgForm) {
        debugger;
        this.loading = true;
        console.log("model")
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
                    this.router.navigate(['/login']);
                }
            )
            .catch((err)=>{
                console.error(err);
                f.resetForm();
            });
        
    }
}