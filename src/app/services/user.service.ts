import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = 'http://localhost:8000/api/register';
    return this.http.post(url, user);
  }
}
