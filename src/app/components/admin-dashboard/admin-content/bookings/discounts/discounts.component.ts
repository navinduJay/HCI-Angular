import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-discounts",
  templateUrl: "./discounts.component.html",
  styleUrls: ["./discounts.component.css"]
})
export class DiscountsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("addBtn").addEventListener("click", addBtn);
    document
      .getElementById("saveEverything")
      .addEventListener("click", saveEverything);

    function addBtn() {
      swal("Successfully added!", "", "success");
    }

    function saveEverything() {
      swal("Saved successfully!", "", "success");
    }
  }
}
