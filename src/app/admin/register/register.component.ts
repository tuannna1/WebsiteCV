import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent1 implements OnInit {
  email: string;
  password: string;
  constructor(public  authService: AuthService,  private router: Router) { }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    this.authService.SendVerificationMail()
  }
  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {
  }

}
