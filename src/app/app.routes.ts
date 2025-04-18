import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { Home2Component } from './Layout/Pages/home2/home2.component';
import { TestComponent } from './Layout/Additions/test/test.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'test', component: TestComponent },



    {
        path: 'home2',
        component: Home2Component, 
        children: [
            {path: 'profile', loadComponent: () => import('./Layout/Pages/profile/profile.component').then(m => m.ProfileComponent)},
         
        ]  
      },

];
