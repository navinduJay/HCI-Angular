import { Injectable } from '@angular/core';
import {ILogin} from './ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  logout():void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  }
}
