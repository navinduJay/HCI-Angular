import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-booked-rooms",
  templateUrl: "./booked-rooms.component.html",
  styleUrls: ["./booked-rooms.component.css"]
})
export class BookedRoomsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("extendBtn").addEventListener("click", extendBtn);

    function extendBtn() {
      swal("Success!", "", "success");
    }
  }
}
