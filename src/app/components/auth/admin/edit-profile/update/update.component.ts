import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSave() {
    let fname = (<HTMLInputElement>document.getElementById("firstName")).value;
    let lname = (<HTMLInputElement>document.getElementById("lastName")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let role = (<HTMLInputElement>document.getElementById("options")).value;
    let mobile = (<HTMLInputElement>document.getElementById("mobile")).value;

    if (
      fname != "" &&
      lname != "" &&
      email != "" &&
      role != "" &&
      mobile != ""
    ) {
      swal("Thank you for your feedback!", "", "success");
    } else {
      swal({
        title: "Please fill all the details!",
        text: "",
        icon: "warning",
        buttons: { cancel: false, confirm: true },
        dangerMode: true
      });
    }
  }
}
