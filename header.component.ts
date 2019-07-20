import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus: any;
  constructor() { }
  this.router = router;
  this.menus = [
  {'title': 'Home', 'url':'/home','active':'active'},
  {'title': 'About', 'url':'/about','active':'active'},

];
  ngOnInit() {
    goto(index){
      for(let i=0; i < this.menus.length; i++)
        this.menus[i].active = '';

    }
    this.menus[index].active = 'active';
    let url = this.menus[index].url;
    this.router.navigator([url]);
  }

}
