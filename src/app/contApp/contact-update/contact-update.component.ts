import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {userobj} from 'src/app/interfaces/contact';


@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
  userobj: userobj;
  constructor(private route:ActivatedRoute, private router:Router) {
    this.userobj = new userobj();
    this.route.queryParams.subscribe((res)=> {
       this.userobj.userId= res['']
    });
   }

  ngOnInit(): void {
  const oldRecords =localStorage.getItem('contactList');
  if (oldRecords !== null){
    const contactList= JSON.parse(oldRecords);
    const currentUser= contactList.find((m:any) => m.userId == this.userobj.userId)
  if (currentUser!==undefined){
    this.userobj.userName=currentUser.userName;
    this.userobj.useremail=currentUser.useremail;
    this.userobj.userCity=currentUser.userCity;
    this.userobj.userState=currentUser.userState;
    this.userobj.userMobile=currentUser.userMobile;
  }
  }

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
  updateData(){

   const oldRecords =localStorage.getItem('contactList');
    if (oldRecords !== null){
      const contactList = JSON.parse(oldRecords);
      contactList.splice(contactList.findIndex((a:any)=>a.userId==this.userobj.userId),1);
      contactList.push(this.userobj);
      localStorage.setItem('contactList', JSON.stringify(contactList));

    }
    this.router.navigateByUrl('/contactList')
  }

}
