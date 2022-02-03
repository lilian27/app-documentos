import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, Observable, throwError, BehaviorSubject, map } from 'rxjs';
import { User, UserResponse } from 'src/app/shared/models/user.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.API_URL}/1bc306c0-efde-4276-8ade-713f0779377a`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token);
          this.loggedIn.next(true);
          return res;
        }),
        catchError((error) => this.handleError(error))
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private checkToken(): void {
    const userToken = localStorage.getItem('token') as string;
    const isExpired = helper.isTokenExpired(userToken);
    isExpired ? this.logout() : this.loggedIn.next(true);
  }

  private handleError(error: any): Observable<never> {
    let erroMessage = 'une error ha ocurrido';
    if (error) {
      erroMessage = `Error: code ${error.message}`;
    }
    window.alert(erroMessage);
    return throwError(erroMessage);
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
