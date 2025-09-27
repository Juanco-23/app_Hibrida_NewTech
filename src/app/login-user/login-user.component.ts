import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class LoginUserComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
