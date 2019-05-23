import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
import { AuthenticationService } from "../../../../../authentication.service";
import { ILogin } from "../../../../../ilogin";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-clogin",
  templateUrl: "./clogin.component.html",
  styleUrls: ["./clogin.component.css"]
})
export class CloginComponent implements OnInit {
  model: ILogin = { uname: "ravi@gmail.com", upwd: "habibi" };
  retUrl: string;
  test: string;
  login = {
    username: "",
    password: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.retUrl = "/home";
    this.authService.logout();
  }

  onLogin() {
    if (
      this.login.username == this.model.uname &&
      this.login.password == this.model.upwd
    ) {
      swal("Login Succesfull", "Welcome Ravi", "success");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("token", this.login.username);
      this.router.navigate([this.retUrl]);
    } else if (this.login.username == "" || this.login.password == "") {
      swal("Please enter your username and password", "", "warning");
    } else {
      swal(
        "Incorrect Credentials",
        "Please check your Username and Password",
        "warning"
      );
    }
  }
}
