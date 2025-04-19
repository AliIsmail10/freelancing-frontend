import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';
import { Observable } from 'rxjs';
import { Skill } from '../../Interfaces/Skill';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

    private apiUrl = `${Environment.baseUrl}`;
  
  constructor(private _HttpClient:HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this._HttpClient.get<Skill[]>(`${this.apiUrl}Skills`);
  }
  getSkillById(id: number) {
    return this._HttpClient.get(`${this.apiUrl}Skills/${id}`);
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this._HttpClient.post<Skill>(`${this.apiUrl}Skills`, skill);
  }
  updateSkill(id: number, skill: Skill): Observable<Skill> {
    return this._HttpClient.put<Skill>(`${this.apiUrl}Skills/${id}`, skill);
  }
  deleteSkill(id: number): Observable<void> {
    return this._HttpClient.delete<void>(`${this.apiUrl}Skills/${id}`);
  }
 

  getUserSkills(): Observable<Skill[]> {
    return this._HttpClient.get<Skill[]>(`${this.apiUrl}UserSkill`);
  }  

  createUserSkill(userSkill: Skill): Observable<Skill> {
    return this._HttpClient.post<Skill>(`${this.apiUrl}UserSkill`, userSkill);
  }

  getUserSkillById(id: number): Observable<Skill> {
    return this._HttpClient.get<Skill>(`${this.apiUrl}UserSkill/${id}`);
  }

  updateUserSkill(id: number, userSkill: Skill): Observable<Skill> {
    return this._HttpClient.put<Skill>(`${this.apiUrl}UserSkill/${id}`, userSkill);
  }
  deleteUserSkill(id: number): Observable<void> {
    return this._HttpClient.delete<void>(`${this.apiUrl}UserSkill/${id}`);
  }

}
