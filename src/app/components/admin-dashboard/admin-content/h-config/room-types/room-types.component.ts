import { Component, OnInit } from "@angular/core";
// import swal from "sweetalert";

@Component({
  selector: "app-room-types",
  templateUrl: "./room-types.component.html",
  styleUrls: ["./room-types.component.css"]
})
export class RoomTypesComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = "after";
  disabled = false;
  constructor() {}

  ngOnInit() {
    // document.getElementById("dr").addEventListener("click", Deluxe);
    // document.getElementById("er").addEventListener("click", Executive);
    // document.getElementById("sr").addEventListener("click", Standard);
    // document.getElementById("hs").addEventListener("click", Honeymoon);
    // document.getElementById("editBtn").addEventListener("click", editSignal);
    // document.getElementById("addRooms").addEventListener("click", addRooms);
    // document.querySelector(".deleteHS").addEventListener("click", deleteHS);
    // function Deluxe() {
    //   (<HTMLInputElement>document.getElementById("roomType")).value =
    //     "Deluxe Room";
    //   (<HTMLInputElement>document.getElementById("roomCode")).value = "DR";
    //   (<HTMLInputElement>document.getElementById("desc")).value =
    //     "This is a Deluxe room";
    // }
    // function Executive() {
    //   (<HTMLInputElement>document.getElementById("roomType")).value =
    //     "Executive Room";
    //   (<HTMLInputElement>document.getElementById("roomCode")).value = "ER";

    //   (<HTMLInputElement>document.getElementById("desc")).value =
    //     "This is a Executive room";
    // }
    // function Standard() {
    //   (<HTMLInputElement>document.getElementById("roomType")).value =
    //     "Standard Room";
    //   (<HTMLInputElement>document.getElementById("roomCode")).value = "SR";

    //   (<HTMLInputElement>document.getElementById("desc")).value =
    //     "This is a Standard room";
    // }
    // function Honeymoon() {
    //   (<HTMLInputElement>document.getElementById("roomType")).value =
    //     "Honeymoon Special Room";
    //   (<HTMLInputElement>document.getElementById("roomCode")).value = "HS";

<<<<<<< HEAD
    //   (<HTMLInputElement>document.getElementById("desc")).value =
    //     "This is a Honeymoon Special room";
    // }
    // function editSignal() {
    //   swal("Details saved successfully!", "", "success");
    // }
    // function addRooms() {
    //   swal("Room added successfully!", "", "success");
    // }
    // function deleteHS() {
    //   swal({
    //     title: "Are you sure?",
    //     text:
    //       "Once deleted, you will not be able to recover this imaginary file!",
    //     icon: "warning",
    //     // buttons: true,
    //     dangerMode: true
    //   }).then(willDelete => {
    //     if (willDelete) {
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success"
    //       });
    //     } else {
    //       swal("Your imaginary file is safe!");
    //     }
    //   });
    // }
=======
      (<HTMLInputElement>document.getElementById("desc")).value =
        "This is a Honeymoon Special room";
    }
    function editSignal() {
      swal("Details saved successfully!", "", "success");
    }
    function addRooms() {
      swal("Room added successfully!", "", "success");
    }
    function deleteHS() {
      swal({
        title: "Are you sure?",
        text:
          "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: { cancel: true, confirm: true },
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    }
>>>>>>> f2bec672c4ed0f939570709fa555238fb19e2a80
  }
}
