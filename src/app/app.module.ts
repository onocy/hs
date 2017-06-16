import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
