import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RightmenuComponent} from './rightmenu/rightmenu.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened = false;
  loaded = false;
  constructor(private router: Router) { }
  selectedTab;
  ngOnInit() {
    this.selectedTab=1;
  }
  moveMenu() {
    this.opened = !this.opened;
    console.log(this.opened); 
  }
  selectTab(index) {
    this.selectedTab = index;
  }
}
