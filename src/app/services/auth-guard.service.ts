import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}
  canActivate(): boolean | Promise<boolean> {
    //   const token = this.authentication.getToken();
    //   const accessToken = this.authentication.getAccessToken();
    //   if (!token) {
    //     console.error('User is not authenticated.');
    //     this.redirectToLoginPage();
    //     return false;
    //   } else if (this.authentication.isAuthenticated()) {
    //     return true;
    //   } else {
    //     this.authentication.refreshToken();
    //     return true;
    //   }
    const allow = localStorage.allow;
    if (allow === 'true') {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
  redirectToLoginPage() {
    this.router.navigate(['']);
  }
}
