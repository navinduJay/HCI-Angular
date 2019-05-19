import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-guests",
  templateUrl: "./guests.component.html",
  styleUrls: ["./guests.component.css"]
})
export class GuestsComponent implements OnInit {
  constructor() {}

  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

  ngOnInit() {
    document.getElementById("editButton").addEventListener("click", editBtn);
    document.querySelector(".deleteHS").addEventListener("click", deleteBtn);
    document.getElementById("banBtn").addEventListener("click", banBtn);
    document.getElementById("addGuest").addEventListener("click", addGuest);

    function editBtn() {
      swal("Successfully updated!", "", "success");
    }

    function addGuest() {
      swal("Successfully added!", "", "success");
    }

    function banBtn() {
      swal({
        title: "Are you sure you want to ban this user?",
        text: "",
        icon: "warning",
        buttons: { cancel: true, confirm: true },
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Banned user successfully!", {
            icon: "success"
          });
        }
      });
    }

    function deleteBtn() {
      swal({
        title: "Are you sure you want to remove this user?",
        text: "",
        icon: "warning",
        buttons: { cancel: true, confirm: true },
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Removed user successfully!", {
            icon: "success"
          });
        }
      });
    }
  }
}
