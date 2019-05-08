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
      document.getElementById("roomType").value = "Deluxe Room";
      document.getElementById("roomCode").value = "DR";
      document.getElementById("desc").value = "This is a Deluxe room";
    }
    function Executive() {
      document.getElementById("roomType").value = "Executive Room";
      document.getElementById("roomCode").value = "ER";
      document.getElementById("desc").value = "This is a Executive room";
    }
    function Standard() {
      document.getElementById("roomType").value = "Standard Room";
      document.getElementById("roomCode").value = "SR";
      document.getElementById("desc").value = "This is a Standard room";
    }
    function Honeymoon() {
      document.getElementById("roomType").value = "Honeymoon Special Room";
      document.getElementById("roomCode").value = "HS";
      document.getElementById("desc").value = "This is a Honeymoon Specialroom";
    }
    function editSignal() {
      swal("Details saved successfully!", "", "success");
    }
    function addRooms() {
      swal("Room added successfully!", "", "success");
    }
    function deleteHS() {
      swal({
        title: "Are you sure?",
        text:
          "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    }
  }
}
