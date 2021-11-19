import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contApp/contact-list/contact-list.component';
import { ContactRegisterComponent } from './contApp/contact-register/contact-register.component';
import { ContactUpdateComponent } from './contApp/contact-update/contact-update.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'contactList',
  component: ContactListComponent},
  {path:'contactRegister',
  component: ContactRegisterComponent},
  {path:'contactUpdate/:id',
  component: ContactUpdateComponent},
  {path:'homePage',
  component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
