import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { API_CONFIG } from 'src/app/environments/environments';
import { Collection } from 'src/app/interface/collection.interface';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

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

  findAll(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${API_CONFIG.baseUrl}/collections`);
  }

  create(collection: Collection): Observable<Collection> {
    return this.http.post<Collection>(`${API_CONFIG.baseUrl}/collections`, collection);
  }
}
