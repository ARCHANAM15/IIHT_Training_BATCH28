import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'DigitalBook';
  constructor() { }
  imghome="././assets/image/bk.jfif"


  
  ngOnInit(): void {
  }
 
}
