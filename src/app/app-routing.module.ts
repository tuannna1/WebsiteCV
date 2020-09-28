import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyjobComponent } from './Components/applyjob-component/applyjob.component';
import { AboutComponent } from './Components/about-component/applyjob.component';

import { TopcvComponentComponent } from './Components/topcv-component/topcv-component.component';

import { RegisterComponent } from './Components/register-component/register.component';

import { CreateCVComponentComponent } from './Components/create-cv-component/create-cv-component.component';

import { ContactComponent } from './Components/contact-component/contact.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
