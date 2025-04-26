import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';
//import { BiddingProject } from '../../Interfaces/bidding-project';
import { Observable } from 'rxjs';
import { BiddingProjectFilter } from '../../Interfaces/BiddingProject/bidding-project-filter';
import { BiddingProjectGetAll, BiddingProjectsResponse } from '../../Interfaces/BiddingProject/bidding-project-get-all';
import { BiddingProjectGetById } from '../../Interfaces/BiddingProject/bidding-project-get-by-id';
import { BiddingprojectCreateUpdate } from '../../Interfaces/BiddingProject/biddingproject-create-update';
import { CreateUpdateReturn } from '../../Interfaces/BiddingProject/create-update-return';

@Injectable({
  providedIn: 'root'
})
export class BiddingProjectService {

  constructor(private httpClinet:HttpClient) { }
  private Url= `${Environment.baseUrl}BiddingProject`

   GetAllBiddingProjects(filter:BiddingProjectFilter, PageNumber:number, PageSize:number): Observable<BiddingProjectGetAll[]>{

    let params=new HttpParams()
    .set('PageNumber',PageNumber.toString())
    .set('PageSize', PageSize.toString())

    for(const key in filter){
      const value= filter[key as keyof BiddingProjectFilter]
      if(value !==null && value!==undefined){
        params=params.set(key, value.toString());
      }
    }

    return this.httpClinet.get<BiddingProjectGetAll[]>(this.Url,{params})
   }


   //------------------------------------------------------------------------------------



   GetBiddingProjectById(id:number): Observable<BiddingProjectGetById>{
    return this.httpClinet.get<BiddingProjectGetById>(`${this.Url}/${id}`);
   }

   //------------------------------------------------------------------------------------

   CreateBiddingProject(project:BiddingprojectCreateUpdate): Observable<CreateUpdateReturn>{
    return this.httpClinet.post<CreateUpdateReturn>(this.Url,project);
   }
   
   //------------------------------------------------------------------------------------
   
   
   UpdateBiddingProject(id:number,project:BiddingprojectCreateUpdate):Observable<CreateUpdateReturn>{
    return this.httpClinet.put<CreateUpdateReturn>(`${this.Url}/${id}`,project);
   }
   

   //------------------------------------------------------------------------------------
   
   DeleteBiddingProject(id: number): Observable<boolean>{
    return this.httpClinet.delete<boolean>(`${this.Url}/${id}`)
   }

   GetAllBiddingProjectsDashBoard(filter: BiddingProjectFilter, PageNumber: number, PageSize: number): Observable<BiddingProjectsResponse> {
    let params = new HttpParams()
      .set('PageNumber', PageNumber.toString())
      .set('PageSize', PageSize.toString());

    for (const key in filter) {
      const value = filter[key as keyof BiddingProjectFilter];
      if (value !== null && value !== undefined) {
        params = params.set(key, value.toString());
      }
    }

    return this.httpClinet.get<BiddingProjectsResponse>(this.Url, { params });
  }
}
