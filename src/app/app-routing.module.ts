import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { NotCheckLoginGuard } from './shared/guards/not-check-login.guard';

import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/login/login.module').then((m) => m.LoginModule),
    canActivate: [NotCheckLoginGuard]
    
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
