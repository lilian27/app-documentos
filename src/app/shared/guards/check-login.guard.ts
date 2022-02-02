import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { take, map } from 'rxjs/operators';
import {  UserResponse } from 'src/app/shared/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLogged.pipe(
      take(1),
      map((user: boolean) => (user ? true : false))
    );
  }
}
