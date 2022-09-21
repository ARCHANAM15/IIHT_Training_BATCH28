import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/booksmodel';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private http:HttpClient) { }
  isEdit=false;
  ngOnInit(): void {
    this.GetdatafromServer();
   }
  BooksModel: Book = new Book();
  BooksModels:Array<Book>= new Array<Book>();

  Add(){
  if(this.isEdit){
    debugger;
  this.http.put("https://localhost:44311/api/Book",this.BooksModel).subscribe(res=>this.postsuccess(res),res=>console.log(res));
  }
  else{
    debugger;
 this.http.post("https://localhost:44311/api/Book",this.BooksModel).subscribe(res=>this.postsuccess(res),res=>console.log(res));
  }
  this.BooksModel=new Book();
  
  }
  GetdatafromServer(){
    this.http.get("https://localhost:44311/api/Book").subscribe(res=>this.Success(res),res=>console.log(res));
  }
  Success(input:any){
    console.log(input)
   this.BooksModels=input;
  }
  postsuccess(input :any){
    this.GetdatafromServer();
  }
  EditBook(input:any){
    this.isEdit = true;
    this.BooksModel = input
  }
  DeleteCustomer(input: any){
    this.http.delete("https://localhost:44311/api/Book?id=" + input.id).subscribe(res => this.postsuccess(res), res => console.log(res));
  }
 
}
