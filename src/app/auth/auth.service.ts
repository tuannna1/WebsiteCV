import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../Service/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, public ngZone: NgZone, public router: Router) {
    this.user = firebaseAuth.authState;
  }

  SendVerificationMail() {
    return this.firebaseAuth.currentUser.then((user) => {
      return user.sendEmailVerification();
    }).then(() => {
      this.router.navigate(['verify-email']);
    })
  }

  ForgotPassword(passwordResetEmail) {
    return this.firebaseAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
        this.ngZone.run(() => {
          this.router.navigate(['admin/login']);
        });
      }).catch((error) => {
        window.alert(error)
      })
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        this.ngZone.run(() => {
          this.router.navigate(['verify-email']);
        });
        console.log('Success!', value);

      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
        alert("danger" + err.message);
      });
  }

  signInWithFacebook() {
    return this.firebaseAuth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGoogle() {
    return this.firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithGithub() {
    return this.firebaseAuth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        console.log('Nice, it worked!');
        alert("Successfully Logged In!");
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
        alert("danger" + err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    alert(" Logout!");
  }
}
