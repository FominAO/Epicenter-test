import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home.component'
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-rightmenu',
  templateUrl: './rightmenu.component.html',
  styleUrls: ['./rightmenu.component.css']
})
export class RightmenuComponent implements OnInit {
  tabs = [
    {
      label: 'Tab1',
      index: '1'
    },
    {
      label: 'Tab2',
      index: '2'
    },
    {
      label: 'Tab3',
      index: '3'
    }
  ]
  selected = 1;
  constructor(private home: HomeComponent) {  }

  ngOnInit() {
  }
  moveMenuCall() {
    
    this.home.moveMenu()
    
  }
  selectTab(i) {
    this.selected = i;
  }
}
