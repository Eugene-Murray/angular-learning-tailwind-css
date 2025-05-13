import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '01-utility-first', loadComponent: () => import('./pages/01-utility-first/index/index.component').then(m => m.IndexComponent) },
    { path: '02-colors', loadComponent: () => import('./pages/02-colors/index/index.component').then(m => m.IndexComponent) },
    { path: '03-container-spacing', loadComponent: () => import('./pages/03-container-spacing/index/index.component').then(m => m.IndexComponent) },
    { path: '04-typography', loadComponent: () => import('./pages/04-typography/index/index.component').then(m => m.IndexComponent) },
    { path: '05-sizing', loadComponent: () => import('./pages/05-sizing/index/index.component').then(m => m.IndexComponent) },
    { path: '06-layout-position', loadComponent: () => import('./pages/06-layout-position/index/index.component').then(m => m.IndexComponent) },
    { path: '07-backgrounds-shadows', loadComponent: () => import('./pages/07-backgrounds-shadows/index/index.component').then(m => m.IndexComponent) },
    { path: '08-borders', loadComponent: () => import('./pages/08-borders/index/index.component').then(m => m.IndexComponent) },
    { path: '09-filters', loadComponent: () => import('./pages/09-filters/index/index.component').then(m => m.IndexComponent) },
    { path: '10-interactivity', loadComponent: () => import('./pages/10-interactivity/index/index.component').then(m => m.IndexComponent) },
    { path: '11-breakpoints', loadComponent: () => import('./pages/11-breakpoints/index/index.component').then(m => m.IndexComponent) },
    { path: '12-columns', loadComponent: () => import('./pages/12-columns/index/index.component').then(m => m.IndexComponent) },
    { path: '13-flex', loadComponent: () => import('./pages/13-flex/index/index.component').then(m => m.IndexComponent) },
    { path: '14-grid', loadComponent: () => import('./pages/14-grid/index/index.component').then(m => m.IndexComponent) },
    { path: '15-transform-transition', loadComponent: () => import('./pages/15-transform-transition/index/index.component').then(m => m.IndexComponent) },
    { path: '16-animation', loadComponent: () => import('./pages/16-animation/index/index.component').then(m => m.IndexComponent) },
    { path: '17-customization', loadComponent: () => import('./pages/17-customization/index/index.component').then(m => m.IndexComponent) },
    { path: '18-dark-mode', loadComponent: () => import('./pages/18-dark-mode/index/index.component').then(m => m.IndexComponent) },
];
