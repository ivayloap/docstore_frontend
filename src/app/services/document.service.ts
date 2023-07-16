import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http: HttpClient, private userService: UserService) {}

  uploadFile(file: File): Observable<any> {
    const url = 'http://localhost:8000/api/documents';

    const token = this.userService.getToken();

    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      return this.http.post(url, formData, { headers });
    } else {
      return throwError('Token not available.');
    }
  }
}
