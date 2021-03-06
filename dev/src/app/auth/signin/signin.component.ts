import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private authServise: AuthService) { }

  ngOnInit() {
  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password
    console.log(email, password, form.value.remember) 
    this.authServise.signinUser(email, password)
    if (form.value.remember == true) {
      ///
    }
  }
  goHome() {
    this.router.navigate(["home"])
  }
}
