import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("paymentBtn").addEventListener("click", paymentBtn);

    function paymentBtn() {
      swal("BOOKING SUCCESS!", "", "success");
    }
  }
}
