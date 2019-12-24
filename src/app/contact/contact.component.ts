import { Component, OnInit } from '@angular/core';
declare var Swal: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public place: string;
  cont: boolean = true;
  public contacts: any = [
    {
      'place': 'Dubai',
      'email': 'abc@gmail.com'
    },
    {
      'place': 'Abu Dhabi',
      'email': 'abcd@gmail.com'
    },
    {
      'place': 'Sharjah',
      'email': 'shj@gmail.com'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  public getEmail(email) {
    // console.log(email);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: email,
      showConfirmButton: false,
      timer: 1500
    });
  }


}
