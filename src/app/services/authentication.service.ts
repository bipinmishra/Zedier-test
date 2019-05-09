import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token = {
    refresh_token: 'refreshtokencode',
    exp: new Date(new Date().getDate() + 1),
    access_token: {
      username: 'user',
      roles: ['Admin', 'RegisteredUser', 'Super User']
    }
  };

  tokenKey = 'a6smm_utoken';
  constructor(private router: Router) {}

  login(username, password) {
    this.setToken(this.token);
    this.router.navigate(['deploy', 'dashboard']);
  }

  logout() {
    this.removeToken();
    this.router.navigate(['login']);
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
  }

  isAuthenticated() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  refreshToken() {
    this.token.exp = new Date(new Date().getDate() + 1);
    this.setToken(this.token);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
