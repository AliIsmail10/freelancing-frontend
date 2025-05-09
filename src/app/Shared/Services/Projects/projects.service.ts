import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private myClient: HttpClient) { }

  apiURL = `${Environment.baseUrl}Projects`;

  getProjects():Observable<any[]> {
    return this.myClient.get<any[]>(this.apiURL);
  }
  getProjectById(projId:number):Observable<any[]>{
    return this.myClient.get<any[]>(`${this.apiURL}/id`,{ params: { ProjectId: projId},withCredentials:true },).pipe(
      tap(() => console.log(`Project Id ${projId}`)),

    );
  }

  getclientsnumber() {

    return this.myClient.get<any>(`${this.apiURL}/numberofclients`).pipe(
      tap(() => console.log(`Clients number`)),
      catchError((error) => {
        console.error('Error fetching clients number:', error);
        return throwError(error);
      })
    );
  }


}
