import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Register } from 'src/app/common/interfaces/Auth';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: Register = {
    username: '',
    name: '',
    pwd: '',
    tel: '',
    cpwd: '',
    countryCode: "237",
    referral: 'QS75TZ'
  };
  referral = 'QS75TZ';
  errorMessage: string = '';
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register(f: NgForm){
    if (!f.form.valid) return;

    this.errorMessage = '';
    this.form = {...this.form, ...f.form.value};

    this.authService.register(this.form).subscribe(data =>{
      if (data.errorCode === '0000')
        this.router.navigate(['/login']);
      this.errorMessage = data.message ? data.message : "Server error";  
    }, err => {
      this.errorMessage = err?.error?.message;
    });
  }

}
