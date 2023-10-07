import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule) },
  { path: 'auth', loadChildren: () => import('./pages/authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
