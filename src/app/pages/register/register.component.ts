import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Register } from 'src/app/common/interfaces/Auth';
import { AuthService } from 'src/app/common/services/auth.service';
import { MessageService } from 'src/app/common/services/message.service';

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
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register(f: NgForm){
    if (!f.form.valid) return;

    this.errorMessage = '';
    this.form = {...this.form, ...f.form.value};
    console.log(this.form)

    if (this.form.cpwd !== this.form.pwd)return; 

    this.messageService.showLoader();

    this.authService.register(this.form).subscribe(data =>{
      this.messageService.removeLoader();
      debugger
      if (data.errorCode === '0000'){
        this.router.navigate(['/login']);
      }
      this.errorMessage = data.message ? data.message : "Server error";  
    }, e => {
      this.errorMessage = e.error && e.error.message ? e.error.message : "Server error";
      this.messageService.removeLoader();
    });
  }

}
