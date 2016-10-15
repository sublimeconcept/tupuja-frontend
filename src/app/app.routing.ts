import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routing = RouterModule.forRoot([
   {
        path:'',
        component: HomeComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {   path: 'register',
        component: RegisterComponent
    },
    {   path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
  }
]);