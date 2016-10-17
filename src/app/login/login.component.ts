import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { AuthenticationService }    from '../authentication/authentication.service';
import { AlertService }             from '../alert/alert.service';
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
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
    }
 
    login(form: NgForm) {
        // this.loading = true;
        let res = this.authenticationService.login(this.model.username, this.model.password)
        form.resetForm();
    }
}