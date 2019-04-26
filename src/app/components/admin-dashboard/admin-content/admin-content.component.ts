import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/config.service";

@Component({
  selector: "app-admin-content",
  templateUrl: "./admin-content.component.html",
  styleUrls: ["./admin-content.component.css"]
})
export class AdminContentComponent implements OnInit {
  adminPanel = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.adminPanel = this.getContent();
  }

  getContent() {
    return this.config.getConfig().adminPanel;
  }
}
