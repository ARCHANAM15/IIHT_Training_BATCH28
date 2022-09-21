import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../Models/booksmodel';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  bktitle:string='';
  bkauthor:string='';
  bkpublisher:string='';
  public url:string="https://localhost:44311/api/reader";
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  SearchBookModel: Book=new Book();
  SearchBookModels:Array<Book>= new Array<Book>();

  searchbk(){
    debugger
   console.log()
   
  }
  Success(input: any) {
    console.log(input);
    this.SearchBookModels = input;
  }
  
}
