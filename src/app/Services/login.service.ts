import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import  {User} from "../User"

const httpOptions = {

	headers : new HttpHeaders({

		"content-type" : 'application/json'
	})
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  auth : boolean = false;

 private apiUrl = "http://localhost:8000/api"

  constructor(private http: HttpClient) { }

  getProfile(user : string , password : string) {

  	// const url = `${this.apiUrl}/profile/`

  	return this.http.post<any>("http://127.0.0.1:8000/api/api-token-auth/" , { "username" : user,
		"password" : password} , httpOptions )
  }

  addUser(user : User) : Observable<User> {

    const url = `${this.apiUrl}/profile/`

    return this.http.post<User>(url, user, httpOptions)
  }

}
