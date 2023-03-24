import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { API_CONFIG } from 'src/app/environments/environments';
import { Model } from 'src/app/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

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

  findAll(): Observable<Model[]> {
    return this.http.get<Model[]>(`${API_CONFIG.baseUrl}/models`);
  }

  create(model: Model): Observable<Model> {
    return this.http.post<Model>(`${API_CONFIG.baseUrl}/models`, model);
  }

}
