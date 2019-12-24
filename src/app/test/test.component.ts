import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { TestModal } from './testModal';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  posts: any;
  loading = true;
  public test = new TestModal();
  radioItems = [
    {name: 'Male', value: 'Male'},
    {name: 'Female', value: 'Female'},
  ];

  public car = ['BMW' , 'Nissan'];
  public getCar = this.car.join(' ');
  constructor(private contact: ContactService) { }

   // data
   public testFrom: any = [
    {
    'name': 'khurshed',
    'email': 'khurshedkhan52@gmail.com',
    }
    ];

  ngOnInit() {
    this.contact.getData().subscribe(
        post => {
          console.log(post);
          this.posts = post;
          this.loading = false;
        }
      );
  }


  public submit() {
    console.log(this.test);
    this.testFrom.push(this.test);
    localStorage.setItem('testdata', JSON.stringify(this.test));
  }



}
