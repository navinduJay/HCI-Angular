import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".checkIn").datepicker({
      format: "yyyy-mm-dd",
      todayBtn: true,
      autoclose: true,
      startDate: new Date()
    })
    .on("changeDate", function(e) {
      var checkInDate = e.date, $checkOut = $(".checkOut");
      checkInDate.setDate(checkInDate.getDate() + 1);
      $checkOut.datepicker("setStartDate", checkInDate);
      $checkOut.datepicker("setDate", checkInDate).focus();
    });

    $(".checkOut").datepicker({
    format: "yyyy-mm-dd",
    todayBtn: true,
    autoclose: true
    });

  }

}
