import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    
    {path:'admin', component:AdminComponent},
{path:'user', component: UserComponent}];
