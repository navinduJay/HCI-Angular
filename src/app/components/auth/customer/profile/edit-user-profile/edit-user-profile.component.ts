import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  details = {
    FName: "",
    LName: "",
    email: "",
    mobile: ""
  };

  constructor() { }

  ngOnInit() {
  }

  onSave(){
    if(this.details.FName != "" && this.details.LName != "" && this.details.email != "" && this.details.mobile != ""){
      swal("Successful", "Successfully saved user details", "success");
    }
    else{
      swal("Warning", "All required fields should be filled", "warning");
    }
  }

}
