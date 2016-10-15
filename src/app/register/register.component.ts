import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { UserService } from '../user/user.service';
 
@Component({
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService) { }
 
    register() {
        this.loading = true;
        console.log("model")
        this.model.username = this.model.email;
        console.log(this.model);
        this.userService.save(this.model).then((user) => {
                console.log("received user = " + user);
            })
            .catch((error) => console.error("error = " + error))
        // this.userService.create(this.model)
        //     .subscribe(
        //         data => {
        //             // set success message and pass true paramater to persist the message after redirecting to the login page
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}