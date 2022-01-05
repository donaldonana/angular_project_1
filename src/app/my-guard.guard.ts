import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./Services/login.service"
// plutot utiliser un service

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {

	constructor(private authService: LoginService,
private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.auth) {
	return true;
	} else {
	this.router.navigate(['']);
	}
  }
  
}
