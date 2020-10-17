import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  auth = {};
  auth_admin = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.auth = this.getAuth();
    this.auth_admin = this.getAdminAuth();
  }

  getAuth() {
    return this.config.getConfig().auth;
  }
  
  getAdminAuth() {
      return this.config.getConfig().auth_admin;
  }
}
