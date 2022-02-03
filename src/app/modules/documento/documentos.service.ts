import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError, BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DocumentoResponse } from 'src/app/shared/models/documento.interface';

@Injectable({
  providedIn: 'root',
})
export class DocumentosService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  getDocumentos(data: any): Observable<DocumentoResponse | void> {
    return this.http
      .post<DocumentoResponse>(
        `${environment.API_URL}/48a29d21-8a3d-4d43-bdd9-dc14befde4e1`,
        data
      )
      .pipe(
        map((res: DocumentoResponse) => {
          return res;
        }),
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: any): Observable<never> {
    let erroMessage = 'une error ha ocurrido';
    if (error) {
      erroMessage = `Error: code ${error.message}`;
    }
    window.alert(erroMessage);
    return throwError(erroMessage);
  }
}
