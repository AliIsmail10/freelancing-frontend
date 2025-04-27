import { Component, OnInit } from '@angular/core';
import { MilestoneService } from '../../../../Shared/Services/Milestone/milestone.service';
import { CommonModule } from '@angular/common';
import { Milestone, MilestoneFile } from '../../../../Shared/Interfaces/milestone';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-milestones',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './milestones.component.html',
  styleUrl: './milestones.component.css'
})

export class MilestonesComponent implements OnInit{
  projectId: number = 0;
  milestones: Milestone[] = [];

  
  getStatusText(status: any): string {
    switch (status) {
      case 1: return 'Completed';
      case 2: return 'In Progress';
      case 3: return 'Pending';
      default: return 'Unknown';
    }
  }
  
  constructor(private route: ActivatedRoute,
    private milestoneService: MilestoneService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];
      console.log(this.projectId);
      this.loadMilestones();
    });
  }

  loadMilestones() {
    this.milestoneService.GetMilestoneByProjectId(this.projectId).subscribe({
      next: (data: any) => {
        this.milestones =Array.isArray(data) ? data : [data];
        console.log(data);
      },
      error: (error) => {
        console.error('Error loading milestones:', error);
      }
    });
  }
}