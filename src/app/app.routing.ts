import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

export const routing = RouterModule.forRoot([
   {
        path:'',
        component: HomeComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
  }
]);