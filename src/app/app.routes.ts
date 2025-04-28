// import { Routes } from '@angular/router';
// import { HomeComponent } from './Layout/Pages/home/home.component';
// import { Home2Component } from './Layout/Pages/home2/home2.component';
// import { BannedUsersComponent } from './Layout/Pages/banned-users/banned-users.component';
// import { MilestonesComponent } from './Layout/Pages/Milestones/milestones/milestones.component';
// import { MyProjectsComponent } from './Layout/Pages/myProjects/my-projects/my-projects.component';
// import { ProposalDetailsComponent } from './Layout/Pages/Proposal-Details/proposal-details/proposal-details.component';
// import { BanDetailsComponent } from './Layout/Pages/ban-details/ban-details.component';
// import { AdminDashboardComponent } from './Layout/Pages/admin-dashboard/admin-dashboard.component';
// import { UserDashboradComponent } from './Layout/Pages/user-dashborad/user-dashborad.component';
// import { UpdateBanComponent } from './Layout/Pages/update-ban/update-ban.component';


// import { BiddingProjectComponent } from './Components/bidding-project/bidding-project.component';
// import { TestComponent } from './Components/test/test.component';
// import { BiddingProjectNewComponent } from './Components/bidding-project-new/bidding-project-new.component';
// import { BiddingProjectDetailsComponent } from './Components/bidding-project-details/bidding-project-details.component';

// export const routes: Routes = [
//     {path: '', redirectTo: 'home', pathMatch: 'full'},
//     { path: '', component: HomeComponent },
//     { path: 'home', component: HomeComponent },

//     {path:'milestone',component:MilestonesComponent,title:'milestone'},
//     {path:'Projects',component:MyProjectsComponent,title:'MyProjects'},
//     {path: 'milestones/:projectId',component: MilestonesComponent},
//     {path: 'proposaldetails/:projectId',component: ProposalDetailsComponent,title:'ProposalDetails'},


//      {path:'register', loadComponent: () => import('./Layout/Pages/register/register.component').then(m => m.RegisterComponent)},
//     {
//         path: 'home',
//         component: HomeComponent,
//         children: [
//         ]
//       },

//       {
//         path: 'home2',
//         component: Home2Component,
//         children: [
//           {
//             path: 'profile',
//             loadComponent: () =>
//               import('./Layout/Pages/profile/profile.component').then(m => m.ProfileComponent)
//           },
//           {path: 'banned',component: BannedUsersComponent},
//           {path: 'bandetails/:id',component: BanDetailsComponent},

//           {path: 'admin-dashboard',component: AdminDashboardComponent
//           },
//           {path: 'updateban/:id',component: UpdateBanComponent},
//           {path: 'dashboard', component: UserDashboradComponent},

//           {path: 'BiddingProject',
//             loadComponent:()=>
//               import('./Components/bidding-project/bidding-project.component').then(m => m.BiddingProjectComponent)
//           },
//           {path: 'test',component: TestComponent},
//           {path: 'new',component: BiddingProjectNewComponent},
//           {path: 'details/:id',component: BiddingProjectDetailsComponent}
//         ]
//       },
   
    
// ];


import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { Home2Component } from './Layout/Pages/home2/home2.component';
import { BannedUsersComponent } from './Layout/Pages/banned-users/banned-users.component';
import { MilestonesComponent } from './Layout/Pages/Milestones/milestones/milestones.component';
import { MyProjectsComponent } from './Layout/Pages/myProjects/my-projects/my-projects.component';
import { ProposalDetailsComponent } from './Layout/Pages/Proposal-Details/proposal-details/proposal-details.component';
import { BanDetailsComponent } from './Layout/Pages/ban-details/ban-details.component';
import { AdminDashboardComponent } from './Layout/Pages/admin-dashboard/admin-dashboard.component';
import { UserDashboradComponent } from './Layout/Pages/user-dashborad/user-dashborad.component';
import { UpdateBanComponent } from './Layout/Pages/update-ban/update-ban.component';
import { TestComponent } from './Components/test/test.component';
import { BiddingProjectNewComponent } from './Components/bidding-project-new/bidding-project-new.component';
import { BiddingProjectDetailsComponent } from './Components/bidding-project-details/bidding-project-details.component';
import { ProposalComponent } from './Components/proposal/proposal.component';
import { Proposal2Component } from './Components/proposal2/proposal2.component';
import { NewNavBarComponent } from './Components/new-nav-bar/new-nav-bar.component';
import { HomeNewComponent } from './Components/home-new/home-new.component';



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
          },
          {path: 'banned',component: BannedUsersComponent},
          {path: 'bandetails/:id',component: BanDetailsComponent},

          {path: 'admin-dashboard',component: AdminDashboardComponent
          },
          {path: 'updateban/:id',component: UpdateBanComponent},
          {path: 'dashboard', component: UserDashboradComponent},
          {path: 'test',component: TestComponent},
          {path: 'new',component: BiddingProjectNewComponent},
          {path: 'details/:id',component: BiddingProjectDetailsComponent},
          {path: 'proposal/:id',component: ProposalComponent},
          {path: 'proposal2/:id',component: Proposal2Component},
          {path: 'navbar',component: NewNavBarComponent},
          {path: 'NewHome2',component: HomeNewComponent},
          


        ]
      },
   
    
];
