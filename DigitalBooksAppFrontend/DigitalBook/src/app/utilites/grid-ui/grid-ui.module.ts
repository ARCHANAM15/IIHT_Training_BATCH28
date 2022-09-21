import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GridUiComponent } from './grid-ui.component';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    GridUiComponent
  ],
  imports: [CommonModule],
  exports:[GridUiComponent,CommonModule]
  
})
export class GridUIModule { }
