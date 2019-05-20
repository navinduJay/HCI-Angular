import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
import { AuthenticationService } from "../../../../authentication.service";
import { IAdminLogin } from "../../../../ilogin_admin";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  model: IAdminLogin = { username: "admin", password: "admin123" };
  retUrl: string;
  test: string;
  adminLogin = {
    username: "",
    password: ""
  };
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.retUrl = "/admin/dashboard";
    this.authService.adminLogout();
  }

  onLogin() {
    if (
      this.adminLogin.username == this.model.username &&
      this.adminLogin.password == this.model.password
    ) {
      swal("Login Succesfully", "Welcome to Admin Panel", "success");

      localStorage.setItem("isAdminLoggedIn", "true");
      localStorage.setItem("token", this.adminLogin.username);
      this.router.navigate([this.retUrl]);
    } else if (
      this.adminLogin.username == "" ||
      this.adminLogin.password == this.model.password
    ) {
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
