import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent,
  children:[
    {path:'', redirectTo:'about', pathMatch:'full'},
    {path:'about', component:AboutComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent}
  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
