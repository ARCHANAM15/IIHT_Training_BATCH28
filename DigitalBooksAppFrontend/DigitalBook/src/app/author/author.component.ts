import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginData } from '../Models/loginData';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private _service:LoginServicesService,private _router:Router) { }
  UserDataModel:loginData=new loginData();
  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUser(this.UserDataModel).subscribe(res=>{
    localStorage.setItem('tocken',res.token)
    this._router.navigate(['create-book/add']);
    },res=>console.log(res));
    
  }
}
