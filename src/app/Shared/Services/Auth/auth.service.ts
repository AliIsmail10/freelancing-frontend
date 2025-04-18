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

  isLoggedIn = this._isLoggedIn.asReadonly();

  isLoggedIn$ = toObservable(this._isLoggedIn);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    this.checkToken();
  }

  private checkToken() {
    const token = localStorage.getItem('userToken');
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
  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('currentPage');
    this.userData.next(null);
    this._isLoggedIn.set(false);
    this._Router.navigate(['/login']);
  }


  login(userData: any): Observable<any> {
    return this._HttpClient.post(
      `${this.apiUrl}`,
      userData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
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
  

}
