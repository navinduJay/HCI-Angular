import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";

@Component({
  selector: "app-why-us",
  templateUrl: "./why-us.component.html",
  styleUrls: ["./why-us.component.css"]
})
export class WhyUsComponent implements OnInit {
  why = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.why = this.getWhy();
  }

  getWhy() {
    return this.config.getConfig().why;
  }
}
