import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";

@Component({
  selector: "app-check-availability",
  templateUrl: "./check-availability.component.html",
  styleUrls: ["./check-availability.component.css"]
})
export class CheckAvailabilityComponent implements OnInit {
  availability = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.availability = this.getAvailability();

    document.getElementById('checkBtn').addEventListener('click', sayHello);

    function sayHello() {
      alert('hello world');
    }

  }

  getAvailability() {
    return this.config.getConfig().availability;
  }
}
