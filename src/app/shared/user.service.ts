import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'http://kareemelbadawy-001-site1.dtempurl.com';
  constructor(private http : HttpClient) { }

registerUser(user:User)
{
  const body : User = {
    UserName: user.UserName,
    Password: user.Password,
    Email: user.Email,
    FirstName:user.FirstName,
    LastName:user.LastName
  }
  return this.http.post(this.rootUrl + '/api/User/Register',body);
}
userAuthentication(userName, password) {
  let params = new HttpParams();
  params = params.append("username",userName);
  params = params.append("password",password);
  params = params.append("grant_type",'password');
  var data = params.toString();
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }
getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }
}