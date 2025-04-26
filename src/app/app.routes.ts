import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { Home2Component } from './Layout/Pages/home2/home2.component';
import { BannedUsersComponent } from './Layout/Pages/banned-users/banned-users.component';
import { MilestonesComponent } from './Layout/Pages/Milestones/milestones/milestones.component';
import { MyProjectsComponent } from './Layout/Pages/myProjects/my-projects/my-projects.component';
import { ProposalDetailsComponent } from './Layout/Pages/Proposal-Details/proposal-details/proposal-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path:'milestone',component:MilestonesComponent,title:'milestone'},
    {path:'Projects',component:MyProjectsComponent,title:'MyProjects'},
    {path: 'milestones/:projectId',component: MilestonesComponent},
    {path: 'proposaldetails/:projectId',component: ProposalDetailsComponent,title:'ProposalDetails'},

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
          }
        ]
      },
{path: 'banned',component: BannedUsersComponent},
];
