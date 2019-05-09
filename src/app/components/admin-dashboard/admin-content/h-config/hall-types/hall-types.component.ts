import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-hall-types",
  templateUrl: "./hall-types.component.html",
  styleUrls: ["./hall-types.component.css"]
})
export class HallTypesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("editBtn").addEventListener("click", editBtn);
    document.getElementById("delete1").addEventListener("click", deleteBtn);
    document.getElementById("delete").addEventListener("click", deleteBtn2);
    document.getElementById("addHKS").addEventListener("click", addHall);

    function editBtn() {
      swal({
        title: "Successfully updated",
        text: "",
        icon: "success",
        button: "Done"
      });
    }
    function addHall() {
      swal({
        title: "Successfully added!",
        text: "",
        icon: "success",
        button: "Done"
      });
    }

    function deleteBtn() {
      swal({
        title: "Are you sure?",
        text:
          "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: { cancel: true, confirm: true },
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          });
        }
      });
    }
    function deleteBtn2() {
      swal({
        title: "Are you sure?",
        text:
          "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: { cancel: true, confirm: true },
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          });
        }
      });
    }
  }
}
