import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface ProjectForAI {
  id: number;
  title: string;
  requiredSkills: string[];
}
@Injectable({
  providedIn: 'root'
})

export class RecommendationService {
  private baseUrl = 'https://localhost:7093/api/Recommendation'; // replace with your actual backend

  constructor(private http: HttpClient) {}

  getSuggestedProjects(skillNames: string[]): Observable<ProjectForAI[]> {
    return this.http.post<ProjectForAI[]>(`${this.baseUrl}/suggested-projects`, {
      skillNames
    });
  }
}
