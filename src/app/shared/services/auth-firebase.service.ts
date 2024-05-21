import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {


  UserData: any;
  constructor(
    private auth: Auth,
    private router: Router,
    public ngZone: NgZone,
    private http: HttpClient,
    private _notificationService: NotificationService
  ) {
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

  //get User
  //get Authenticated user from firebase
  getAuthFire() {
    return this.auth.currentUser;
  }


  //get Authenticated user from Local Storage
  getAuthLocal() {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user;
  }


  //Check wither User Is looged in or not
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    console.log(user);
    return user !== null ? true : false;
  }

  get user$() {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    return userInfo;
  }


  //Register Method
  Register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.UserData = result.user;
        this.ngZone.run(() => {
          /* Call the SendVerificaitonMail() function when new user sign
       up and returns promise */
          this.sendEmailVerification()
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }


  //Login Method
  Login(credential: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      return signInWithEmailAndPassword(this.auth, credential.email, credential.password)
      .then((result: any) => {
        this._notificationService.message("You signed successfully", "Login Success");
        this.UserData = result.user;
        localStorage.setItem('user', JSON.stringify(result));
        this.ngZone.run(() => {
          this.router.navigateByUrl('/dashboards');
        });
        resolve(result);
      })
      .catch((error) => {
        this._notificationService.error("Invalid credential or server error", "Login Failed");
        reject(error);
      });
    })
      
  }


  //Logout
  Logout() {
    // localStorage.removeItem('user');
    // this.router.navigateByUrl('/sign-in')
    signOut(this.auth).then(() => this.router.navigate(['/sign-in']))
  }


  //login with Email or Facebook
  //Login with Google
  GoogleAuth() {
    return this.loginWithPopup(new GoogleAuthProvider());
  }



  //Login with Facebook
  //FacebookAuth() {
  //  return this.loginWithPopup(new FacebookAuthProvider());
  //}



  //Pop Up Provider
  loginWithPopup(provider: any) {
    return signInWithPopup(this.auth, provider).then(() => {
      this.router.navigate(['dashboard']);
    });
  }


  //Send Password Reset Email
  async sendPasswordResetEmails(email: string) {
    sendPasswordResetEmail(this.auth, email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  //Send Email Verification
  sendEmailVerification() {
    return sendEmailVerification(this.auth.currentUser as User);
  }
}