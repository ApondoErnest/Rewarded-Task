import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/common/interfaces/Auth';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: Login = {
    username: '',
    password: ''
  };
  errorMessage: string = '';
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(f: NgForm){
    if (!f.form.valid) return;

    this.errorMessage = '';
    this.form = {...this.form, ...f.form.value};

    this.authService.login(this.form)
    .then((data) => this.router.navigate(['/user/dashboard']))
    .catch(err => {
      this.errorMessage = err?.error?.message;
      this.router.navigate(['/user/dashboard']); //todo remove
    });
    
  }
}
