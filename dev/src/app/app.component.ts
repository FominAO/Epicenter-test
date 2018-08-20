import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hezzl-app';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAjvqF-p402iib6eJiu_mpyU1qln6Txsiw",
      authDomain: "epicenter-test.firebaseapp.com",
    })
  }
}
