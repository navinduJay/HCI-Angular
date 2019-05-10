import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-room-confirm",
  templateUrl: "./room-confirm.component.html",
  styleUrls: ["./room-confirm.component.css"]
})
export class RoomConfirmComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("saveMe").addEventListener("click", saveMe);

    function saveMe() {
      swal("Room Assigned Successfull!", "", "success");
    }
  }
}
