import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

export const routing = RouterModule.forRoot([
   {
        path:'home',
        component: HomeComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
  }
]);