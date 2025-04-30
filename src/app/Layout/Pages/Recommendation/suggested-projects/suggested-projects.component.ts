import { Component } from '@angular/core';
import { ProjectForAI, RecommendationService } from '../../../../Shared/Services/Reccomendation/recommendation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggested-projects',
  imports: [CommonModule,FormsModule],
  templateUrl: './suggested-projects.component.html',
  styleUrl: './suggested-projects.component.css'
})
export class SuggestedProjectsComponent {
  skillInput = '';
  skillNames: string[] = [];
  suggestedProjects: ProjectForAI[] = [];

  constructor(private recommendationService: RecommendationService) {}

  addSkill() {
    if (this.skillInput.trim() && !this.skillNames.includes(this.skillInput)) {
      this.skillNames.push(this.skillInput.trim());
    }
    this.skillInput = '';
  }

  fetchProjects() {
    this.recommendationService.getSuggestedProjects(this.skillNames).subscribe({
      next: (projects) => this.suggestedProjects = projects,
      error: (err) => console.error('Error fetching suggestions', err)
    });
  }
}
