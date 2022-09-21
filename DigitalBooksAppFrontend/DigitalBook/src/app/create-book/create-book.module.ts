import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { authorroutes } from '../routing/authorroutes';
import { CreateBookComponent } from './create-book.component';
import { createbookroutes } from '../routing/createbookroutes';
import { GridUIModule } from '../utilites/grid-ui/grid-ui.module';
import {HttpClientModule} from '@angular/common/http';






@NgModule({
  declarations: [
    CreateBookComponent,
    
  ],
  imports: [
    FormsModule,
    GridUIModule,
    RouterModule.forChild(createbookroutes),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [CreateBookComponent]
})
export class createbookModule { }
