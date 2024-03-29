import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, map } from 'rxjs';
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

  findById(id: any): Observable<Collection> {
    return this.http.get<Collection>(`${API_CONFIG.baseUrl}/collections/${id}`)
  }

  create(collection: Collection): Observable<Collection> {
    return this.http.post<Collection>(`${API_CONFIG.baseUrl}/collections`, collection);
  }

  update(collection: Collection): Observable<Collection> {
    return this.http.put<Collection>(`${API_CONFIG.baseUrl}/collections/${collection.id}`, collection);
  }

  delete(id: any): Observable<Collection> {
    return this.http.delete<Collection>(`${API_CONFIG.baseUrl}/collections/${id}`);
  }
}
