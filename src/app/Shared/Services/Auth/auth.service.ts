import { Injectable, signal } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Environment } from '../../../base/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, throwError, BehaviorSubject } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${Environment.baseUrl}Account/login`;
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  private _isLoggedIn = signal<boolean>(false);

  isLoggedIn = this._isLoggedIn;

  isLoggedIn$ = toObservable(this._isLoggedIn);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    this.checkToken();
  }
  getTokenFromCookie(): string | null {
    const name = 'user_Token=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }
  private checkToken() {
    const token = this.getTokenFromCookie() ;
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        this.userData.next(decodedUser);
        this._isLoggedIn.set(true);
      } catch (error) {
        this.logout();
      }
    }
  }

deleteCookie(name: string) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Secure; SameSite=Lax';
}
logout() {
  this.deleteCookie('user_Token');
  this.userData.next(null);
  this._isLoggedIn.set(false);  
  this._Router.navigate(['/home']);
}

  login(userData: any): Observable<any> {
    return this._HttpClient.post(
      `${this.apiUrl}`,
     userData
    );
  }
  

  deCodeUserData(token: string) {
    try {
      const decodedUser = jwtDecode(token);
      console.log("Decoded User:", decodedUser);
      this.userData.next(decodedUser);
      this._isLoggedIn.set(true);
    } catch (error) {
      this.logout();
    }
  }

 
  
  getRole(): string | null {
    const token = this.getTokenFromCookie();
    const roleClaim = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
  
    if (token) {
      try {
        const decodedUser: any = jwtDecode(token);
        return decodedUser[roleClaim] || null;
      } catch (error) {
        return null;
      }
    }
    return null;
  }
  
}
