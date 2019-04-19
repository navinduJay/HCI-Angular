import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  auth = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.auth = this.getAuth();
  }

  getAuth() {
    return this.config.getConfig().auth;
  }
}
