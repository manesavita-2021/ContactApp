import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {userobj} from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {
  userobj: userobj;

  constructor(private router:Router) {
    this.userobj = new userobj();
  }

  ngOnInit(): void {
  }

  getNewUserId(){
    const oldRecords =localStorage.getItem('contactList');
    if (oldRecords !== null){
      const contactList = JSON.parse(oldRecords);
      return contactList.length + 1;
    } else {
      return 1;
    }
  }
  saveData(){
   const latestId = this.getNewUserId();
  this.userobj.userId= latestId;
  const oldRecords =localStorage.getItem('contactList');
    if (oldRecords !== null){
      const contactList = JSON.parse(oldRecords);
      contactList.push(this.userobj);
      localStorage.setItem('contactList', JSON.stringify(contactList));

    } else {
      const userArr = [];
      userArr.push(this.userobj);
      localStorage.setItem('contactList', JSON.stringify(userArr));
    }
    this.router.navigateByUrl('/contactList')
  }

}
