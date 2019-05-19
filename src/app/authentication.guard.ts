import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router : Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      return this.verifyLogin(url);
  }

  verifyLogin(url):boolean{
    if(!this.isLoggedIn()){
      this.router.navigate(['/user/login']);
      return false;
    }
    return true;
  }

  public isLoggedIn() : boolean{
    let status = false;
    if(localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
  }
  
}
