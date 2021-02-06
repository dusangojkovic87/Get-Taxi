import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginFormComponent } from './Pages/login/login-form/login-form.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterFormComponent } from './Pages/login/register-form/register-form.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent,children:[
    {path:"sign-in",component:LoginFormComponent},
    {path:"register",component:RegisterFormComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
