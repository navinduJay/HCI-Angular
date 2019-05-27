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
  }

  onSave() {
    let fname = (<HTMLInputElement>document.getElementById("fname")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let comment = (<HTMLInputElement>document.getElementById("comment")).value;
    if (fname != "" && email != "" && comment != "") {
      swal("Thank you for your feedback!", "", "success");
    } else {
      swal({
        title: "Please fill all the details!",
        text: "",
        icon: "warning",
        buttons: { cancel: false, confirm: true },
        dangerMode: true
      });
    }
  }

  getContact() {
    return this.config.getConfig().contact;
  }
}
