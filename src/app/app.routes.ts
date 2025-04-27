import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { Home2Component } from './Layout/Pages/home2/home2.component';
import { BannedUsersComponent } from './Layout/Pages/banned-users/banned-users.component';
import { BanDetailsComponent } from './Layout/Pages/ban-details/ban-details.component';
import { BiddingProjectComponent } from './Components/bidding-project/bidding-project.component';
import { TestComponent } from './Components/test/test.component';
import { BiddingProjectNewComponent } from './Components/bidding-project-new/bidding-project-new.component';
import { BiddingProjectDetailsComponent } from './Components/bidding-project-details/bidding-project-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },

    // {path:'register', loadComponent: () => import('./Layout/Pages/register/register.component').then(m => m.RegisterComponent)},
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
          {path: 'BiddingProject',
            loadComponent:()=>
              import('./Components/bidding-project/bidding-project.component').then(m => m.BiddingProjectComponent)
          },
          {path: 'test',component: TestComponent},
          {path: 'new',component: BiddingProjectNewComponent},
          {path: 'details/:id',component: BiddingProjectDetailsComponent}
        ]
      },
];
