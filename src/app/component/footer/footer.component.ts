import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomNavs } from 'src/app/common/interfaces/navs';
import { BOTTOM_NAVS } from 'src/app/common/mock/bottom-navs';
import { NavService } from '../../common/services/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  navs: BottomNavs[];
  selectedNav: string = '';
  constructor(private router: Router,
    public navService: NavService) { 
    this.navs =BOTTOM_NAVS;
  }

  ngOnInit(): void {
    this.selectedNav = this.navService.bottomNav;
    console.log(this.selectedNav)
  }

  changeBottomNav(nav: BottomNavs){
    this.selectedNav = nav.label;
    this.navService.bottomNav = nav.label;

    this.router.navigate([nav.path]);
  }
}
