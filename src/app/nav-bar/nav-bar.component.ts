import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
// import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	user : any = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

//   	$(document).ready(function() {
//   $("#success-alert").hide();
//   $("#myWish").click(function showAlert() {
//     $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
//       $("#success-alert").slideUp(500);
//     });
//   });
// });
  	
  }

}
