import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { AddBlogComponent } from './Pages/admin/add-blog/add-blog.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { TaxiOrdersComponent } from './Pages/admin/taxi-orders/taxi-orders.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { GetCabComponent } from './Pages/get-cab/get-cab.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginFormComponent } from './Pages/login/login-form/login-form.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterFormComponent } from './Pages/login/register-form/register-form.component';
import { LogoutComponent } from './Pages/logout/logout.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"get-cab",component:GetCabComponent},
  {path:"contact",component:ContactComponent},
  {path:"blog",component:BlogComponent},
  {path:"logout",component:LogoutComponent},
  {path:"login",component:LoginComponent,children:[
    {path:"",redirectTo:"sign-in",pathMatch:"full"},
    {path:"sign-in",component:LoginFormComponent},
    {path:"register",component:RegisterFormComponent},
  ]},
  {path:"admin",component:AdminComponent,children:[
    {path:"taxi-orders",component:TaxiOrdersComponent},
    {path:"add-blog",component:AddBlogComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
