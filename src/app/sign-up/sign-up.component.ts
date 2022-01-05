import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { faUser, faStarOfLife, faAt, faMobile } from '@fortawesome/free-solid-svg-icons';
import {LoginService} from "../Services/login.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() onAddUser = new EventEmitter()
  faUser = faUser;
  faStarOfLife = faStarOfLife;
  faAt = faAt ;
  faMobile = faMobile ;

  email : string 
  phone : number
  password : string
  ConfirmPassword : string
  FirstName : string
  LastName : string

  constructor(private logService : LoginService) { }

  ngOnInit(): void {

  	// $(window).click(function () {
   //    console.log("hello world")
   //  });

   
  }

  onSubmit(){

    if (!this.phone || !this.password || !this.ConfirmPassword || !this.FirstName) {
      alert("please add task")
      return
    }

    const newUser = {
      phone : this.phone,
      name : this.FirstName,
      password : this.password,
    }

    this.logService.addUser(newUser).subscribe((user) => {
      console.log(user)
    },
    (error) => {
      alert("some thing went wrong")
      console.log(error)
    })

    this.password = ''
    this.LastName = ''
    this.FirstName = ''
    this.ConfirmPassword = '' 
    this.phone = null
    this.email = ''
  }


  // onScroll(){

  // 	console.log("hello world")
  // }

}
