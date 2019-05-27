import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import swal from 'sweetalert';

@Component({
  selector: 'app-cregister',
  templateUrl: './cregister.component.html',
  styleUrls: ['./cregister.component.css']
})
export class CregisterComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('tel', sanitizer.bypassSecurityTrustHtml('../../../../../assets/images/calendar.svg'))
   }

  ngOnInit() {
  }

  onRegister(){
    swal("Registered Successfully", "Welcome to our hotel chain", "success");
  }
}
