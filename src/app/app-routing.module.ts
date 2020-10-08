import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyjobComponent } from './Components/applyjob-component/applyjob.component';
import { AboutComponent } from './Components/about-component/applyjob.component';

import { TopcvComponentComponent } from './Components/topcv-component/topcv-component.component';

import { RegisterComponent } from './Components/register-component/register.component';

import { BlogComponent } from './Components/blog/blog.component';

import { BlogSingleComponent } from './Components/blog-single/blog-single.component';

import { CreateCVComponentComponent } from './Components/create-cv-component/create-cv-component.component';

import { EmployerComponent } from './Components/employer-component/employer.component';

import { ContactComponent } from './Components/contact-component/contact.component';
import { JoblistComponentComponent } from './Components/joblist-component/joblist-component.component';
import { LoginComponent } from './admin/login/login.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { RegisterComponent1 } from './admin/register/register.component';
import {DashboardComponent} from "./admin/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'applyJob',
    component: ApplyjobComponent,
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'topcv',
    component: TopcvComponentComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'createCV',
    component: CreateCVComponentComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog-single',
    component: BlogSingleComponent,
  },
  {
    path: 'joblist',
    component: JoblistComponentComponent,
  },

  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/register', component: RegisterComponent1 },
  { path: 'admin/forgot-password', component: ForgotPasswordComponent },
  { path: 'admin/verify-email', component: VerifyEmailComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  {
    path: 'employer',
    component: EmployerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
