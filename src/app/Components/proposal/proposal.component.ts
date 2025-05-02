import { Component } from '@angular/core';
import { TimeLeftPipe } from '../../Pipes/time-left.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proposal',
  imports: [TimeLeftPipe, FormsModule],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.css'
})
export class ProposalComponent {
  proposal = {
    bidAmount: null,
    coverLetter: '',
    attachments: [] as File[],
    answers: [] as string[]
  };

  // Example job data, replace with actual job input or service
  job = {
    title: 'Sample Job Title',
    projectType: 'Fixed-price',
    minimumPrice: 100,
    maximumprice: 500,
    experienceLevel: 'Intermediate',
    biddingEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    projectSkills: ['Angular', 'TypeScript', 'API']
  };

  // Example questions, replace with actual job questions
  jobQuestions = [
    'Do you have experience with similar projects?',
    'What is your estimated timeline for completion?'
  ];

  onFileSelected(event: any) {
    if (event.target.files) {
      this.proposal.attachments = Array.from(event.target.files);
    }
  }

  submitProposal() {
    // TODO: Implement actual submission logic (API call)
    alert('Proposal submitted!\n' + JSON.stringify(this.proposal, null, 2));
  }
}