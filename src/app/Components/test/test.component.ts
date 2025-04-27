import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  filtersOpen: {[key: string]: boolean} = {
    category: true,
    experience: false,
    jobType: false,
    proposals: false,
    clientInfo: false,
    clientHistory: false,
    clientLocation: false,
    clientTimeZones: false,
    projectLength: false,
    hoursPerWeek: false,
    jobDuration: false
  };

  // Example filter data
  categories = ['Web Development', 'Design', 'Writing', 'Marketing'];
  experienceLevels = [
    { label: 'Entry Level', count: 2 },
    { label: 'Intermediate', count: 51 },
    { label: 'Expert', count: 29 }
  ];
  jobTypes = [
    { label: 'Hourly', count: 45 },
    { label: 'Fixed-Price', count: 37 }
  ];
  fixedPriceRanges = [
    { label: 'Less than $100', count: 4 },
    { label: '$100 to $500', count: 21 },
    { label: '$500 - $1K', count: 7 },
    { label: '$1K - $5K', count: 5 },
    { label: '$5K+', count: 0 }
  ];
  proposals = [
    { label: 'Less than 5', count: 25 },
    { label: '5 to 10', count: 29 },
    { label: '10 to 15', count: 28 },
    { label: '15 to 20', count: 22 },
    { label: '20 to 50', count: 60 }
  ];
  clientInfo = [
    { label: 'My previous clients', count: 0 },
    { label: 'Payment verified', count: 49 }
  ];

  // Example selected filters (for checkboxes)
  selectedProposals = [0, 1, 2]; // checked indices for proposals

  toggleFilter(name: string) {
    this.filtersOpen[name] = !this.filtersOpen[name];
  }

  isProposalChecked(idx: number): boolean {
    return this.selectedProposals.includes(idx);
  }

  toggleProposal(idx: number) {
    if (this.selectedProposals.includes(idx)) {
      this.selectedProposals = this.selectedProposals.filter(i => i !== idx);
    } else {
      this.selectedProposals.push(idx);
    }
  }
}
