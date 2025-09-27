import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
