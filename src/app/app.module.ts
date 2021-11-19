import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contApp/contact-list/contact-list.component';
import { ContactRegisterComponent } from './contApp/contact-register/contact-register.component';
import { ContactUpdateComponent } from './contApp/contact-update/contact-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactRegisterComponent,
    ContactUpdateComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
