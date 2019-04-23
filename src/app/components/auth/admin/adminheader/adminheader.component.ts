import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-adminheader",
  templateUrl: "./adminheader.component.html",
  styleUrls: ["./adminheader.component.css"]
})
export class AdminheaderComponent implements OnInit {
  activetab = "home";
  constructor() {}

  ngOnInit() {}

  getActiveTab(linkName: string) {
    this.activetab = linkName;
  }
}
