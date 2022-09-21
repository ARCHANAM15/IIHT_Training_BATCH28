import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { authorroutes } from '../routing/authorroutes';
import { ReaderComponent } from './reader.component';
import { readerroutes } from '../routing/readerroutes';
import { GridUIModule } from '../utilites/grid-ui/grid-ui.module';
import {HttpClientModule} from '@angular/common/http';






@NgModule({
  declarations: [
    ReaderComponent,
    
  ],
  imports: [
    FormsModule,
    GridUIModule,
    RouterModule.forChild(readerroutes),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [ReaderComponent]
})
export class readerModule { }
