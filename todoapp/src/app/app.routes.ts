import { Routes } from '@angular/router';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { NetworkerrorComponent } from './components/others/networkerror/networkerror.component';

export const routes: Routes = [
    {path:'', redirectTo:'/login',pathMatch:'full'},
    {path:'**', component:LoginComponent},
    {path:'todo', component:TodolistComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'network-error', component:NetworkerrorComponent},
];
