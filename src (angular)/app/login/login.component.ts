import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

export class LoginModel {
  public email: string;
  public password: string;
  public isLoginError: boolean;
}

@Component({
  selector: 'tda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  loginModel = new LoginModel();
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {}

  login() {
    this.loginService.login(this.loginModel).subscribe(response => {
      let logRes = JSON.parse(response._body);
      if (logRes.loginRes === 'OK') {
        localStorage.setItem('email', logRes.email.trim());
        localStorage.setItem('name', logRes.name.trim());
        localStorage.setItem('avatar', logRes.avatar.trim());
        this.router.navigate(['/home']);
      } else {
        this.loginModel.isLoginError = true;
        this.error = logRes.loginRes;
      }
    });
  }
}
