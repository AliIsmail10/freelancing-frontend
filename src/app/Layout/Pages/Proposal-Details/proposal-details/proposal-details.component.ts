import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../../../Shared/Services/Proposal/proposal.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProposalView, SuggestedMilestone } from '../../../../Shared/Interfaces/Proposal';
import { MilestoneService } from '../../../../Shared/Services/Milestone/milestone.service';
import { MilestoneDto } from '../../../../Shared/Interfaces/createfixedproject';

@Component({
  selector: 'app-proposal-details',
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './proposal-details.component.html',
  styleUrl: './proposal-details.component.css'
})
export class ProposalDetailsComponent implements OnInit {
  projectId: number = 0;
  proposals: ProposalView[] = [];
  milestones: SuggestedMilestone[] = [];
  getStatusClass(status: any): string {
    return status ? status.toString().toLowerCase() : 'pending';
  }
  constructor(private proposalService: ProposalService,private route: ActivatedRoute,private milestoneService:MilestoneService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = +params['projectId'];
      this.loadProposalDetails(this.projectId);
    //  this.loadSubmitMilestone(this.projectId);
      console.log(this.projectId);
      
     }
    );
    
    }

  
  loadProposalDetails(projectId: number) {
    this.proposalService.GetProposalsByprojectid(projectId).subscribe({
      next: (data: any) => {
        this.proposals = Array.isArray(data) ? data : [data];
        console.log('Proposal details loaded:', this.proposals); 
        this.proposals.forEach(proposal => {
          if (proposal.suggestedMilestones) {
            console.log('Milestones:', proposal.suggestedMilestones);
          }
        });
      },
      error: (error) => {
        console.error('Error loading proposal details:', error);
      }
    });
    }

//  loadSubmitMilestone(projectId: number) {
//     this.milestoneService.GetMilestoneByProjectId(projectId).subscribe({
//       next: (data: any) => {
//         this.milestones = Array.isArray(data) ? data : [data];
//         console.log('Milestones loaded:', this.milestones);
//       },
//       error: (error) => {
//         console.error('Error submitting milestone:', error);
//       }
//     });
//   }
 }
  

