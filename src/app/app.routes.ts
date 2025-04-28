import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { Home2Component } from './Layout/Pages/home2/home2.component';
import { FixedProjectComponent } from './Layout/Pages/fixed-project/fixed-project.component';
import { FixedProjectDetailsComponent } from './Layout/Pages/fixed-project-details/fixed-project-details.component';
import { CreateProjectComponent } from './Layout/Pages/create-project/create-project.component';
import { SubscribtionPlanComponent } from './Layout/Pages/subscribtion-plan/subscribtion-plan.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'fixed', component: FixedProjectComponent},
    {path: 'createproject', component: CreateProjectComponent},
    {path: 'subscribtion', component: SubscribtionPlanComponent},



   // {path: 'fixeddetails/:id', component: FixedProjectDetailsComponent},
  {  path: 'fixed-project/:id',
    loadComponent: () => import('../app/Layout/Pages/fixed-project-details/fixed-project-details.component')
      .then(m => m.FixedProjectDetailsComponent)}
   // { path: 'test', component: TestComponent },



    // {
    //     path: 'home2',
    //     component: Home2Component, 
    //     children: [
    //         {path: 'profile', loadComponent: () => import('./Layout/Pages/profile/profile.component').then(m => m.ProfileComponent)},
         
    //     ]  
    //   },
    //   {
    //     path: 'home',
    //     component: HomeComponent,
    //     children: [
    //       { path: 'test', component: TestComponent }
    //     ]
    //   },
  


   , {
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
      }

];
