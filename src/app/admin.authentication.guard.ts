import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminAuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url): boolean {
    if (!this.isAdminLoggedIn()) {
      this.router.navigate(["access"]);
      return false;
    }
    return true;
  }

  public isAdminLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem("isAdminLoggedIn") == "true") {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
