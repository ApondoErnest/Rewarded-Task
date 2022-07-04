import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn!: boolean;
  constructor(private router: Router,
    private authService: AuthService) {
     }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
  }
  goTo(path:string[]) {
    this.router.navigate(path); //todo change to move to sign in view
  }
}
