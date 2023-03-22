import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivateChild {

  constructor(private router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const returnLocalStorage =  localStorage.getItem('logged');
      const returnLogged = JSON.parse(returnLocalStorage!);

      if(!returnLogged) {
        this.router.navigate(['/login']);
        return returnLogged;
      }
      return returnLogged;
  }
}
