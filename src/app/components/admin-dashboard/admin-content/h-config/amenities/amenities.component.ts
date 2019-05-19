import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";

@Component({
  selector: "app-amenities",
  templateUrl: "./amenities.component.html",
  styleUrls: ["./amenities.component.css"]
})
export class AmenitiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("editBtn").addEventListener("click", editBtn);
    document.querySelector(".deleteHS").addEventListener("click", deletBtn);
    document
      .getElementById("addAmenities")
      .addEventListener("click", addAmenity);

    function editBtn() {
      swal("Successfully updated!", "", "success");
    }

    function addAmenity() {
      swal("Successfully added!", "", "success");
    }
    function deletBtn() {
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
