
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplyjobComponent} from './Components/applyjob-component/applyjob.component';
import {AboutComponent} from './Components/about-component/applyjob.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
