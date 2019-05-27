import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";
import swal from "sweetalert";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contact = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.contact = this.getContact();
    document.getElementById("contactBtn").addEventListener("click", contactBtn);

    function contactBtn() {
      swal("Thank you for your feedback.", "", "success");
    }
  }

  getContact() {
    return this.config.getConfig().contact;
  }
}
