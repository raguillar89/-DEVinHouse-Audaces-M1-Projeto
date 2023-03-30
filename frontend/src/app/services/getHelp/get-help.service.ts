import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { API_CONFIG } from 'src/app/environments/environments';
import { GetHelp } from 'src/app/interface/getHelp.interface';

@Injectable({
  providedIn: 'root'
})
export class GetHelpService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  findAll(): Observable<GetHelp[]> {
    return this.http.get<GetHelp[]>(`${API_CONFIG.baseUrl}/gethelp`);
  }

  create(gethelp: GetHelp): Observable<GetHelp> {
    return this.http.post<GetHelp>(`${API_CONFIG.baseUrl}/gethelp`, gethelp);
  }
}
