declare var google: any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  constructor() { }

  signIn() {

  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleToken(response: any) {
    if(response) {
      const payload = this.decodeToken(response.credential);
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
      this.router.navigate(["browse"]);
    }
  }

  signout() {
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['/']);
  }
}
