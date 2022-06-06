import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomNavs } from 'src/app/common/interfaces/navs';
import { BOTTOM_NAVS } from 'src/app/common/mock/bottom-navs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  navs: BottomNavs[];
  selectedNav: string = 'Task';
  constructor(private router: Router) { 
    this.navs =BOTTOM_NAVS;
    console.log('came to constructor');
  }

  ngOnInit(): void {
    console.log('came to init')
  }

  changeBottomNav(nav: BottomNavs){
    this.selectedNav = nav.label;

    this.router.navigate([nav.path]);
  }
}
