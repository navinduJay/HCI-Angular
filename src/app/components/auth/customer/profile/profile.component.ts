import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:string;
  constructor(private router: Router,public authService: AuthenticationService) { }

  ngOnInit() {
    this.user = localStorage.getItem('token');
  }

}
