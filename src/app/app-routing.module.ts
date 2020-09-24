import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'proDetaill',
    component: ProductDetailComponent,
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
