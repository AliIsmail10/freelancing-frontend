import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { Home2Component } from './Layout/Pages/home2/home2.component';
import { BannedUsersComponent } from './Layout/Pages/banned-users/banned-users.component';
import { BanDetailsComponent } from './Layout/Pages/ban-details/ban-details.component';
import { AdminDashboardComponent } from './Layout/Pages/AdminDashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboradComponent } from './Layout/Pages/user-dashborad/user-dashborad.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'test', component:AdminDashboardComponent } ,
    {path:'register', loadComponent: () => import('./Layout/Pages/register/register.component').then(m => m.RegisterComponent)},
    {
        path: 'home',
        component: HomeComponent,
        children: [
        ]
      },

      {
        path: 'home2',
        component: Home2Component,
        children: [
          {
            path: 'profile',
            loadComponent: () =>
              import('./Layout/Pages/profile/profile.component').then(m => m.ProfileComponent)
          },
          {path: 'banned',component: BannedUsersComponent},
          {path: 'bandetails/:id',component: BanDetailsComponent},
          {path: 'dashboard', component: UserDashboradComponent},
        ]
      },
];
