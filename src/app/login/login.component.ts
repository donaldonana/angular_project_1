import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms"
import {LoginService} from "../Services/login.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


	myform : FormGroup; 
	authStatus : boolean = false;
  userEmpty : boolean = false;
  passEmpty : boolean = false;
	user : any;
	pass : any;
	tryAgain : boolean = false;

  constructor(private logService : LoginService, private router: Router) { }

  ngOnInit(): void {

    

  	this.myform = new FormGroup({

  		username : new FormControl(''),
  		password : new FormControl('')
  	});

  }


  onSubmit() {


    if (this.myform.value["username"] == "") {

      this.userEmpty = true 
      // code...
    }

    if (this.myform.value["password"] == "") {

      this.passEmpty = true 
      // code...
    }

    if(this.myform.value["password"] != "" && this.myform.value["username"] != "" ) {


      this.user = this.myform.value["username"]
      this.pass = this.myform.value["password"]

    this.logService.getProfile(this.user, this.pass).subscribe((User) => {
    console.log(User);
    this.authStatus = true
    this.logService.auth = true
    this.router.navigate(['/nav'], {queryParams : {phone : User.phone}});
    },
    (error) => {
    this.tryAgain = true
    console.log(error)
    }
    )


    }

  	

  	// console.log(this.myform.value["username"])

  	// this.tryAgain = true
  }

}
