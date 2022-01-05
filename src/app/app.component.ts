import { Component } from '@angular/core';
import {Observable, of} from 'rxjs'
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {LoginService} from "./Services/login.service"
import {FormControl, FormGroup} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'start';
  profil : any;
  

  constructor(private logService : LoginService) { }

  ngOnInit(): void {

  	
  	console.log("hello world")

  	
  }
}
