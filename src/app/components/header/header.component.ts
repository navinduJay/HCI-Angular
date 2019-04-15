import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  activetab = "home";
  constructor() {}

  ngOnInit() {}

  getActiveTab(linkName: string) {
    this.activetab = linkName;
  }
}
