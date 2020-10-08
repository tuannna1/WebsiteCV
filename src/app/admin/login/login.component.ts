import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public  authService: AuthService,  private router: Router) { }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }
  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['/'])
      })
      .catch((err) => console.log(err));
  }
  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['/'])
      })
      .catch((err) => console.log(err));
  }
  signInWithGithub() {
    this.authService.signInWithGithub()
      .then((res) => {
        this.router.navigate(['/'])
      })
      .catch((err) => console.log(err));
  }
  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {
  }

}
