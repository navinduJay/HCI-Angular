import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { AuthenticationService } from '../../../../../authentication.service';
import {ILogin} from '../../../../../ilogin';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {

  model: ILogin = {uname: "ravi@gmail.com", upwd: "habibi"};
  frmLogin: FormGroup;
  retUrl: string;

  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthenticationService) { }

  ngOnInit() {
    this.frmLogin = this.formBuilder.group({
      uname: ['', Validators.required],
      upwd: ['', Validators.required]
    });
    this.retUrl = '/profile';
    this.authService.logout();
  }

  get frm() { 
    return this.frmLogin.controls; 
  }
  
  onLogin() { 
        
    if(this.frmLogin.invalid){
      return;
    }
    else{
      if(this.frm.uname.value == this.model.uname && this.frm.upwd.value == this.model.upwd) {
        swal("Login Succesfully", "Welcome Ravi", "success");
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.frm.uname.value);
        this.router.navigate([this.retUrl]);
      }
      else{
        swal("Incorrect Credentials", "Please check your Username and Password", "warning");
      }
    }
    

  }

}
