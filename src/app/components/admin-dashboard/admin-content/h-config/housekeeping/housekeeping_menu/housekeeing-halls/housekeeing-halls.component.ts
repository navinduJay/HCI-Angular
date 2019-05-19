import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-housekeeing-halls",
  templateUrl: "./housekeeing-halls.component.html",
  styleUrls: ["./housekeeing-halls.component.css"]
})
export class HousekeeingHallsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    document.getElementById("addHKS").addEventListener("click", addHK);
    document.getElementById("delete").addEventListener("click", deleteHK);
    document.getElementById("delete1").addEventListener("click", deleteHK1);

    document.getElementById("editBtn").addEventListener("click", edit1);

    function addHK() {
      swal("Job assigned success!", "", "success");
    }

    function edit1() {
      swal("Successfully updated!", "", "success");
    }

    function deleteHK() {
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

    function deleteHK1() {
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
