import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { AuthenticationService } from "../../authentication.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"]
})
export class AdminDashboardComponent implements OnInit {
  user: string;
  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.user = localStorage.getItem("token");
  }
}
