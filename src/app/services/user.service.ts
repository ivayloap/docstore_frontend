import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private tokenKey = 'authToken';
  private token: string | null = null;

  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem(this.tokenKey);
  }

  registerUser(user: any): Observable<any> {
    const url = 'http://localhost:8000/api/register';
    return this.http.post(url, user);
  }

  loginUser(user: any): Observable<boolean> {
    const url = 'http://localhost:8000/api/login';
    return new Observable<boolean>((observer) => {
      this.http.post(url, user).subscribe(
        (response: any) => {
          if (response.token) {
            this.setToken(response.token);
            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        },
        (error) => {
          observer.next(false);
          observer.complete();
        }
      );
    });
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  logout(token: string | null) {
    this.setToken(null);
  }

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      sessionStorage.setItem(this.tokenKey, token);
    } else {
      sessionStorage.removeItem(this.tokenKey);
    }
  }

  getToken(): string | null {
    if (this.token) {
      return this.token;
    } else {
      this.token = sessionStorage.getItem(this.tokenKey);
      return this.token;
    };
  }
}
