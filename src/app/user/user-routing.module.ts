import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:':username', component:UserComponent,
  children: [
    {path:'', redirectTo:'forum', pathMatch:'full'},
    {path:'forum', component: ForumComponent},
    {path:'profile', component: ProfileComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
