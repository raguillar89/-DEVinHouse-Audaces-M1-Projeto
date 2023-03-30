import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/environments/environments';
import { User } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${API_CONFIG.baseUrl}/users`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  findById(id: any): Observable<User> {
    return this.http.get<User>(`${API_CONFIG.baseUrl}/users/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${API_CONFIG.baseUrl}/users`, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${API_CONFIG.baseUrl}/users/${user.id}`, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
