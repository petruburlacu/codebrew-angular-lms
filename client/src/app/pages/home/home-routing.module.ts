import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeService } from './services/home.service';

const routes: Routes = [
    {
        path: 'home',
        providers: [],
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    },
    { path: 'privacy', loadComponent: () => import('./features/privacy-details/privacy-details.component').then(m => m.PrivacyDetailsComponent) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeService] // Provide the service here
})
export class HomeRoutingModule {}