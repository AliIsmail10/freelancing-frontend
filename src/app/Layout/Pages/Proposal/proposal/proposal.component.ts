import { Component } from '@angular/core';
import { ProposalService } from '../../../../Shared/Services/Proposal/proposal.service';
import { ProposalsView, ProposalView } from '../../../../Shared/Interfaces/Proposal';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Params, Router } from '@angular/router';


@Component({
  selector: 'app-proposal',
  imports: [CommonModule],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.css'
})
export class ProposalComponent {
projectId: number = 0;
proposals: ProposalView[] = [];
  
  constructor(private proposalService:ProposalService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void
   {
   
    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];
      console.log('Project ID:', this.projectId);
      this.loadProposals();
    });
}
loadProposals(){
  this.proposalService.GetProposalsByprojectid(this.projectId).subscribe(
    (data) => {
      this.proposals = Array.isArray(data) ? data : [data];
      console.log('Proposal details loaded:', this.proposals);
    },
    (error) => {
      console.error('Error loading proposals:', error);
    }
  );
  }
  getprojectById() {
    this.router.navigate(['/proposaldetails', this.projectId]);
    console.log('Navigating to project details for ID:', this.projectId);
  }
 
}


