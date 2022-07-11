import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomNavs } from 'src/app/common/interfaces/navs';
import { BOTTOM_NAVS } from 'src/app/common/mock/bottom-navs';
import { NavService } from '../../common/services/nav.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../../common/services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  private errorNavSub!:Subscription;
  error!:string;
  navs: BottomNavs[] = [];
  selectedNav: string = '';
  constructor(private router: Router,
    private messageService: MessageService,
    public navService: NavService) { 
  }

  ngOnInit(): void {
    this.errorNavSub = this.navService.errorNav.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.messageService.showloaderWithMsg('Loading configs');
    this.navService.fetchbottomNavs('CYPHERFUND_BOTTOM_NAVS').subscribe(
     {
      next: data => {
        this.navs = data;
        this.selectedNav = this.navs.length > 0 ? this.navs[0].label : '';
        this.messageService.removeLoader();
      },
      error: error => {
        this.messageService.removeLoader();
      }
     }
    );
  }

  changeBottomNav(nav: BottomNavs){
    this.selectedNav = nav.label;
    this.navService.bottomNav = nav;

    this.router.navigate([nav.path]);
  }

  ngOnDestroy(): void {
      this.errorNavSub.unsubscribe();
  }
}
