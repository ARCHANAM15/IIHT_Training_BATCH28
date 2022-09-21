import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Mainroutes } from '../routing/mainroutes';

import { LoginServicesService } from '../services/login-services.service';
import { MasterComponent } from '../master/master.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes),
    HttpClientModule
  ],
  providers: [LoginServicesService],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
