import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { authorroutes } from '../routing/authorroutes';

import { AuthorComponent } from './author.component';




@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(authorroutes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AuthorComponent]
})
export class authorModule { }
