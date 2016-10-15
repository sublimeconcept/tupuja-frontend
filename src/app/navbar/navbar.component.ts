import {Component} from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    currentUser;
    constructor() {
        this.currentUser = localStorage.getItem('currentUser');
        console.log("navbar loading current = " + this.currentUser);
    }

}