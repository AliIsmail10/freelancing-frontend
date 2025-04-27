import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../../Shared/Services/Projects/projects.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent implements OnInit {

   constructor(private ProjectService:ProjectsService,private router: Router){}
   projects:any[] = []; 
   projectId:number = 0;

   loadProjects() {
    this.ProjectService.getProjects().subscribe({
      next: (value) => {
        console.log('Projects:', value);
       
        this.projects = Array.isArray(value) ? value : [value];
      },
      error: (err) => console.log('Error fetching projects:', err)
    });

   }
   ngOnInit(): void {
    this.loadProjects();
   }
   getprojectById(projectId: number) {
    // Navigate to the milestones route with the projectId
    this.router.navigate(['/milestones', projectId]);
  }
   }





