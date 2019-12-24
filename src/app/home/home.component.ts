import { Component, OnInit } from '@angular/core';
import { HomeModal } from './homeModal';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public home: String = 'Home';
  public user = new HomeModal;
  constructor() {
  }

  ngOnInit() {
  }

  public register() {
    console.log(this.user);
  }

}
