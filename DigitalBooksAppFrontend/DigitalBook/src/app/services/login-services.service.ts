import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
_loginUrl="https://localhost:44311/api/login"
_registerUrl="https://localhost:4431/api/register-user"

  constructor(private http:HttpClient) { }

  loginUser(login :any){
    return this.http.post<any>(this._loginUrl,login);
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
