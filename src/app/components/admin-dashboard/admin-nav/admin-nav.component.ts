import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../authentication.service";
import swal from "sweetalert";
@Component({
  selector: "app-admin-nav",
  templateUrl: "./admin-nav.component.html",
  styleUrls: ["./admin-nav.component.css"]
})
export class AdminNavComponent implements OnInit {
  status: string = localStorage.getItem("isAdminLoggedIn");
  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {}

  cLogout(): void {
    swal("Logged Out", "Successfully logged out", "success");
    this.authService.logout();
    this.router.navigate(["admin/login"]);
  }
}
