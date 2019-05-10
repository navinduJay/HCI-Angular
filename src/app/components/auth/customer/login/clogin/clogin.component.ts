import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // hide = true;
  onLogin(){
    var username = document.getElementById("uname").nodeValue;
    var userpass = document.getElementById("upass").nodeValue;

    // if(username = "ravindu@gmail.com"){
      // document.getElementById("test").innerHTML = username;
      alert("Successfully logged in");
    // }
  }

}
