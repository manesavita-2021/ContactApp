import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bg: string ='https://thumbs.dreamstime.com/z/web-contact-us-icons-post-website-internet-page-concept-black-paper-isolated-white-background-35215369.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
