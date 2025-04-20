import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProposalDTO, ProposalsView, ProposalView, UpdateProposalProposalDTO } from '../../Interfaces/Proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  private apiUrl = `${Environment.baseUrl}Proposal`;

  constructor(private _HttpClient:HttpClient) { }

  GetAllProposals():Observable<ProposalsView>{
      return this._HttpClient.get<ProposalsView>(`${this.apiUrl}`);
  }
  GetProposalById(id:number):Observable<ProposalView>{
    return this._HttpClient.get<ProposalView>(`${this.apiUrl}/${id}`);
  }
  GetProposalsByprojectid(projectid:number):Observable<ProposalsView>{
    return this._HttpClient.get<ProposalsView>(`${this.apiUrl}/getbyprojectId/${projectid}`);
  }
  Getbyfreelancerid(freelancername:string):Observable<ProposalsView>{
  return this._HttpClient.get<ProposalsView>(`${this.apiUrl}/getbyfreelancerId/${freelancername}`);
  }
  CreateProposal(dto:CreateProposalDTO):Observable<ProposalView>{
  return this._HttpClient.post<ProposalView>(`${this.apiUrl}`,dto);
  }
  UpdateProposal(id:number,dto:UpdateProposalProposalDTO):Observable<ProposalView>{
    return this._HttpClient.put<ProposalView>(`${this.apiUrl}/${id}`,dto);
    }
    DeleteProposal(id:number):Observable<string>{
      return this._HttpClient.delete<string>(`${this.apiUrl}/${id}`);
    }
}
