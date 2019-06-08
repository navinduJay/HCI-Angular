import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";

@Component({
  selector: "app-room-types",
  templateUrl: "./room-types.component.html",
  styleUrls: ["./room-types.component.css"]
})
export class RoomTypesComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = "after";
  disabled = false;
  constructor() {}

  ngOnInit() {
    document.getElementById("dr").addEventListener("click", Deluxe);
    document.getElementById("er").addEventListener("click", Executive);
    document.getElementById("sr").addEventListener("click", Standard);
    document.getElementById("hs").addEventListener("click", Honeymoon);
    document.getElementById("editBtn").addEventListener("click", editSignal);
    document.getElementById("addRooms").addEventListener("click", addRooms);
    document.querySelector(".deleteHS").addEventListener("click", deleteHS);
    function Deluxe() {
      (<HTMLInputElement>document.getElementById("roomType")).value =
        "Deluxe Room";
      (<HTMLInputElement>document.getElementById("roomCode")).value = "DR";
      (<HTMLInputElement>document.getElementById("desc")).value =
        "This is a Deluxe room";
    }
    function Executive() {
      (<HTMLInputElement>document.getElementById("roomType")).value =
        "Executive Room";
      (<HTMLInputElement>document.getElementById("roomCode")).value = "ER";
      (<HTMLInputElement>document.getElementById("desc")).value =
        "This is a Executive room";
    }
    function Standard() {
      (<HTMLInputElement>document.getElementById("roomType")).value =
        "Standard Room";
      (<HTMLInputElement>document.getElementById("roomCode")).value = "SR";
      (<HTMLInputElement>document.getElementById("desc")).value =
        "This is a Standard room";
    }
    function Honeymoon() {
      (<HTMLInputElement>document.getElementById("roomType")).value =
        "Honeymoon Special Room";
      (<HTMLInputElement>document.getElementById("roomCode")).value = "HS";
      (<HTMLInputElement>document.getElementById("desc")).value =
        "This is a Honeymoon Special room";
    }
    function editSignal() {
      swal("Details saved successfully!", "", "success");
    }
    function addRooms() {
      swal("Room added successfully!", "", "success");
    }
    function deleteHS() {
      swal({
        title: "Are you sure you want to delete?",
        text: "",
        icon: "warning",
        buttons: { cancel: true, confirm: true },
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Deleted successfully!", {
            icon: "success"
          });
        }
      });
    }
  }
}
