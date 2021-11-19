import { Component, OnInit } from '@angular/core';
import {userobj} from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList:userobj[];
  constructor() {
    this.contactList = [];
   }

  ngOnInit(): void {
    const records = localStorage.getItem('contactList');
    if (records !== null){
      this.contactList = JSON.parse(records);
    }
  }

}
