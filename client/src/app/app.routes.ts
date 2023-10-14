import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () => import('@client/modules/home').then((c) => c.HomeComponent)
    },
    {
        path: 'authentication',
        loadChildren: () => import('@client/modules/authentication').then((c) => c.AuthenticationComponent)
    }
];
