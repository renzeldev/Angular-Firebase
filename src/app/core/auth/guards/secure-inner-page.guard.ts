import { Injectable } from '@angular/core';
import { AuthFirebaseService } from 'app/shared/services/auth-firebase.service'; 
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SecureInnerPageGuard implements CanActivate {
  constructor(private authService: AuthFirebaseService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Check the user is logged in or not(In case the user is not logged in he will be redirected to Signin page)
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in'])
    }
    return true;
  }
}