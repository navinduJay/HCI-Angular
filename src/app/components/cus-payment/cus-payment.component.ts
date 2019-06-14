import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
@Component({
  selector: "app-cus-payment",
  templateUrl: "./cus-payment.component.html",
  styleUrls: ["./cus-payment.component.css"]
})
export class CusPaymentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document
      .getElementById("paymentMake")
      .addEventListener("click", makePayment);

    function makePayment() {
      swal("Booking Success!", "", "success");
    }
  }
}
