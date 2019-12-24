import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  defaultImage = 'https://blueprintstudios.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif';
  image = 'http://www.hdwallpaperspulse.com/wp-content/uploads/2016/09/09/beautiful-hd-high-resolution.jpg';
  offset = 100;
  constructor() { }

  ngOnInit() {
  }
}
