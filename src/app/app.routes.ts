import { Routes } from '@angular/router';

import { FixedProjectComponent } from './Layout/Pages/fixed-project/fixed-project.component';
import { FixedProjectDetailsComponent } from './Layout/Pages/fixed-project-details/fixed-project-details.component';
import { CreateProjectComponent } from './Layout/Pages/create-project/create-project.component';
import { SubscribtionPlanComponent } from './Layout/Pages/subscribtion-plan/subscribtion-plan.component';
import { BannedUsersComponent } from './Layout/Pages/banned-users/banned-users.component';
import { MilestonesComponent } from './Layout/Pages/Milestones/milestones/milestones.component';
import { MyProjectsComponent } from './Layout/Pages/myProjects/my-projects/my-projects.component';
import { ProposalDetailsComponent } from './Layout/Pages/Proposal-Details/proposal-details/proposal-details.component';
import { BanDetailsComponent } from './Layout/Pages/ban-details/ban-details.component';
import { AdminDashboardComponent } from './Layout/Pages/admin-dashboard/admin-dashboard.component';
import { UserDashboradComponent } from './Layout/Pages/user-dashborad/user-dashborad.component';
import { UpdateBanComponent } from './Layout/Pages/update-ban/update-ban.component';
// import { TestComponent } from './Components/test/test.component';
import { BiddingProjectNewComponent } from './Components/bidding-project-new/bidding-project-new.component';
import { BiddingProjectDetailsComponent } from './Components/bidding-project-details/bidding-project-details.component';
import { FreelancersComponent } from './Layout/Pages/freelancers/freelancers.component';
import { Proposal2Component } from './Components/proposal2/proposal2.component';
import { FreelancerProfileComponent } from './Layout/Pages/freelancer-profile/freelancer-profile.component';
import { IdentityVerificationDeicisionComponent } from './Layout/Pages/identity-verification-deicision/identity-verification-deicision.component';
// import { ProposalComponent } from './Components/proposal/proposal.component';
import { ProposalsComponent } from './Layout/Pages/Proposal/proposals/proposal.component';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { adminGuard } from './Shared/Guards/admin/admin.guard';
import { clientGuard } from './Shared/Guards/client/client.guard';
import { freelancerGuard } from './Shared/Guards/freelancer/freelancer.guard';
import { clientOrFreelancerGuard } from './Shared/Guards/Combination/clientOrFreelancerGuard';





export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'fixed', component: FixedProjectComponent,canActivate: [ClientOrFreelancerGuard] },
    {path: 'createproject', component: CreateProjectComponent ,canActivate: [clientGuard]},
    {path: 'subscribtion', component: SubscribtionPlanComponent,canActivate: [clientOrFreelancerGuard] },
  {  path: 'fixed-project/:id',
    loadComponent: () => import('../app/Layout/Pages/fixed-project-details/fixed-project-details.component')
      .then(m => m.FixedProjectDetailsComponent ) ,canActivate: [clientOrFreelancerGuard] },

 //   {path:'milestone',component:MilestonesComponent,title:'milestone',canActivate: [clientGuard,freelancerGuard]},
    {path:'myprojects',component:MyProjectsComponent,title:'MyProjects', canActivate: [clientOrFreelancerGuard]},
    {path: 'milestones/:projectId',component: MilestonesComponent, canActivate: [clientOrFreelancerGuard] },
    {path: 'proposaldetails/:proposalId',component: ProposalDetailsComponent,title:'ProposalDetails', canActivate: [clientOrFreelancerGuard] },
    {path: 'VerificationRequests',component: IdentityVerificationDeicisionComponent, canActivate: [adminGuard]},
    {path: 'proposals/:projectId',component: ProposalsComponent,title:'proposals', canActivate: [clientOrFreelancerGuard]},
    // {path:'milestone',component:MilestonesComponent,title:'milestone'},
    {path:'myprojects',component:MyProjectsComponent,title:'MyProjects',canActivate: [freelancerGuard]},
    {path:'milestones/:projectId',component: MilestonesComponent, canActivate: [clientOrFreelancerGuard] },
    {path:'proposaldetails/:proposalId',component: ProposalDetailsComponent,title:'ProposalDetails', canActivate: [clientOrFreelancerGuard] },
    {path:'VerificationRequests',component: IdentityVerificationDeicisionComponent, canActivate: [adminGuard]},
    {path:'proposals/:projectId',component: ProposalsComponent,title:'proposals', canActivate: [clientOrFreelancerGuard] },
    {
        path: 'profile',
        loadComponent: () =>
          import('./Layout/Pages/profile/profile.component').then(m => m.ProfileComponent)
      },
      {path: 'banned',component: BannedUsersComponent,canActivate: [adminGuard]},
      {path: 'bandetails/:id',component: BanDetailsComponent,canActivate: [adminGuard]},
      {path: 'admin-dashboard',component: AdminDashboardComponent,canActivate: [adminGuard]},
      {path: 'updateban/:id',component: UpdateBanComponent,canActivate: [adminGuard]},
      {path: 'dashboard', component: UserDashboradComponent,canActivate: [clientOrFreelancerGuard] },
      {path: 'addfund', component: AddFundByClientComponent,canActivate: [clientGuard]},
      {path: 'new',component: BiddingProjectNewComponent ,canActivate: [clientOrFreelancerGuard] },
      {path: 'details/:id',component: BiddingProjectDetailsComponent,canActivate: [clientOrFreelancerGuard] },
      {path:'allusers',loadComponent: () => import('./Layout/Pages/AllUsers/allusers.component').then(m => m.AllusersComponent),canActivate: [adminGuard]},
      {path :'addAdmin',loadComponent: () => import('./Layout/Pages/add-admin/add-admin.component').then(m => m.AddAdminComponent),canActivate: [adminGuard]},
      {path: 'proposal2/:id',component: Proposal2Component,canActivate: [clientOrFreelancerGuard] },
      {path: 'freelancers',component: FreelancersComponent,canActivate: [clientOrFreelancerGuard] },
      {path: 'Freelancerprofile/:username',component: FreelancerProfileComponent,canActivate: [clientOrFreelancerGuard]},
      {path: 'login',component: LoginComponent},
      {path: 'chathub/:username',component: ChatComponent},
      {path: 'notification',component: NotificationsComponent},
    
    {path:'register', loadComponent: () => import('./Layout/Pages/register/register.component').then(m => m.RegisterComponent)},

     
      {path:'withdraw', component: WithdrawComponent,title:'Withdraw'},
     
      {path:'register', loadComponent: () => import('./Layout/Pages/register/register.component').then(m => m.RegisterComponent)},
      {path:'wishlist', component: WishlistComponent},
      {path:'myproposals',component:MyProposalsComponent},
      {path:'detector',component:ReviewsDetectorComponent}

];
