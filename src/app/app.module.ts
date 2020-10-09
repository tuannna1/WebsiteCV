import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponentComponent} from './Components/login-component/login-component.component';
import {FooterComponent} from './Layouts/footer/footer.component';

import {NavComponent} from './Layouts/nav/nav.component';
import {HomePageComponent} from './Components/home-page/home-page.component';
import {FilterComponent} from './Layouts/filter/filter.component';
import {AdvertisementComponent} from './Layouts/advertisement/advertisement.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ApplyjobComponent} from './Components/applyjob-component/applyjob.component';
import {AboutComponent} from './Components/about-component/applyjob.component';

import {TopcvComponentComponent} from './Components/topcv-component/topcv-component.component';
import {EmployerComponent} from './Components/employer-component/employer.component';

// import { RegisterComponent } from './Components/register-component/register.component';
import {CreateCVComponentComponent} from './Components/create-cv-component/create-cv-component.component';

// -----------thanh hau import blog ----------------------
import {BlogComponent} from './Components/blog/blog.component';
import {BlogSingleComponent} from './Components/blog-single/blog-single.component';
import {JoblistComponentComponent} from './Components/joblist-component/joblist-component.component';
// @ts-ignore

// -----------thanh hau import blog ----------------------
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {LoginComponent} from './admin/login/login.component';
import {RegisterComponent1} from './admin/register/register.component';
import {ForgotPasswordComponent} from './admin/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './admin/verify-email/verify-email.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './Components/register-component/register.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    FooterComponent,
    NavComponent,
    HomePageComponent,
    FilterComponent,
    AdvertisementComponent,
    ApplyjobComponent,
    AboutComponent,
    TopcvComponentComponent,
    BlogComponent,
    BlogSingleComponent,
    JoblistComponentComponent,
    LoginComponent,
    RegisterComponent,
    RegisterComponent1,
    ForgotPasswordComponent,
    VerifyEmailComponent,


    EmployerComponent,

    EmployerComponent,
    DashboardComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
    //  ModalModule.forRoot()
    FontAwesomeModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
