import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/common/interfaces/Auth';
import { AuthService } from 'src/app/common/services/auth.service';
import { MessageService } from 'src/app/common/services/message.service';

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
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(f: NgForm) {
    if (!f.form.valid) return;

    this.errorMessage = '';
    this.form = { ...this.form, ...f.form.value };
    this.messageService.showLoader();

    this.authService.login(this.form)
      .then((data) => {
        this.messageService.removeLoader();
        this.router.navigate(['/user/dashboard'])
      })
      .catch(err => {
        this.errorMessage = 'Server error';
        if (err) this.errorMessage = err.message;
        this.messageService.removeLoader();
        this.router.navigate(['/user/dashboard']) //todo remove
      });

  }
}
