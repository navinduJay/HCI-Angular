import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-admin-rooms",
  templateUrl: "./admin-rooms.component.html",
  styleUrls: ["./admin-rooms.component.css"]
})
export class AdminRoomsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("editBtn").addEventListener("click", editBtn);
    document.getElementById("deleteBtn").addEventListener("click", deleteBtn);

    function editBtn() {
      swal("Room successfully updated!", "", "success");
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
          swal("Deleted successfully!", {
            icon: "success"
          });
        }
      });
    }
  }
}
