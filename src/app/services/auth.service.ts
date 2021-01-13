import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  singUpUrl:string = ""

  singUp(username:string, password:string):Observable<any>{
    let body = {
      username:username,
      password:password
    }
  return this.http.post("",body)
  }
}
