import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [UserComponent, HeaderComponent, FooterComponent, ForumComponent, ProfileComponent, ResourcesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
