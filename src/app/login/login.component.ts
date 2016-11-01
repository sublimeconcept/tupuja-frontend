import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { AuthenticationService }    from '../authentication/authentication.service';
import {NgForm}                     from '@angular/forms';
 
@Component({
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        ) { console.log("testing master push"); }
 
    ngOnInit() {
        // reset login status
    }
 
    login(form: NgForm) {
        // this.loading = true;
        let res = this.authenticationService.login(this.model.username, this.model.password)
        form.resetForm();
    }
}
