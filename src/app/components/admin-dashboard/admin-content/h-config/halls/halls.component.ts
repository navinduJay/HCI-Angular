import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-halls",
  templateUrl: "./halls.component.html",
  styleUrls: ["./halls.component.css"]
})
export class HallsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("one").addEventListener("click", setProperties);
    document.getElementById("myTD2").addEventListener("click", setProperties2);
    document.getElementById("addHalls").addEventListener("click", addHall);
    document
      .getElementById("deleteTwo")
      .addEventListener("click", deleteHallTwo);
    document
      .getElementById("deleteOne")
      .addEventListener("click", deleteHallOne);
    document.getElementById("editBtn").addEventListener("click", editHall);

    function addHall() {
      swal("Successfully added!", "", "success");
    }
    function editHall() {
      swal("Successfully updated!", "", "success");
    }
    function deleteHallOne() {
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
    function deleteHallTwo() {
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

    function setProperties() {
      (<HTMLInputElement>document.getElementById("myTDs")).innerHTML =
        "Winchester";
    }

    function setProperties2() {
      (<HTMLInputElement>document.getElementById("myTDs")).innerHTML =
        "King Court";
    }
  }
}
