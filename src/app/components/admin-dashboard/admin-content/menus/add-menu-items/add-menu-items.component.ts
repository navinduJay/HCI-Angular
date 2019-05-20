import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-add-menu-items",
  templateUrl: "./add-menu-items.component.html",
  styleUrls: ["./add-menu-items.component.css"]
})
export class AddMenuItemsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("addMenuBtn").addEventListener("click", addMenuBtn);

    document.getElementById("editBtn").addEventListener("click", editBtn);

    document.getElementById("deleteBtn").addEventListener("click", deleteBtn);

    function addMenuBtn() {
      swal("Successfully added", "", "success");
    }

    function editBtn() {
      swal("Successfully updated", "", "success");
    }

    function deleteBtn() {
      swal({
        title: "Are you sure you want to delete?",
        text: "",
        icon: "warning",
        buttons: { cancel: true, confirm: true },
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Successfully deleted", {
            icon: "success"
          });
        }
      });
    }
  }
}
