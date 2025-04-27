import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FixedPriceProject, FixedPriceProjectById, ProjectsResponse } from '../../Interfaces/FixedPriceProject';
import { FixedProjectFilters } from '../../Interfaces/FixedPriceProjectFilters';
import { CreateFixedProjectDTO } from '../../Interfaces/createfixedproject';
import { Environment } from '../../../base/environment';

@Injectable({
  providedIn: 'root'
})
export class FixedPriceProjectService {
  private apiUrl = `${Environment.baseUrl}FixedPriceProject`;

  constructor(private http: HttpClient) {}
  getmyprojects():Observable<FixedPriceProject[]>
  {
    return this.http.get<FixedPriceProject[]>(this.apiUrl+"/myfixedpriceprojects");
  }
  getuserprojects(username:string):Observable<FixedPriceProject[]>
  {
    return this.http.get<FixedPriceProject[]>(this.apiUrl+`/userfixedpriceprojects/${username}`);
  }
  getProjects(filters: FixedProjectFilters = {}): Observable<FixedPriceProject[]> {
    // const baseUrl = 'https://localhost:7093/api/FixedPriceProject';
    // const searchParams = new URLSearchParams();
    // const fullUrl = `${baseUrl}?${searchParams.toString()}`;
   // console.log('Request URL:', fullUrl);

    let params = new HttpParams();

    // Convert each filter to query params
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(val => {
          params = params.append(key, val.toString());
        });
      } else if (value !== null && value !== undefined) {
        params = params.set(key, value.toString());
      }
    });

    return this.http.get<FixedPriceProject[]>(this.apiUrl, { params });
  }

// Method to get a project by its ID
  getProjectById(projectId: number): Observable<FixedPriceProjectById> {
    const url = `${this.apiUrl}/${projectId}`; // Construct the URL for the specific project by ID
    //const baseUrl = 'https://localhost:7093/api/FixedPriceProject';
    //const searchParams = new URLSearchParams();
   // const fullUrl = `${baseUrl}?${searchParams.toString()}`;
    console.log('mahoud URL:', url);
    return this.http.get<FixedPriceProjectById>(url); // Perform the GET request and return the project data
  }


// Method to create a new project
createProject(project: CreateFixedProjectDTO): Observable<any> {
  return this.http.post(this.apiUrl, project);
}


// Method to update an existing project
updateProject(id: number, project: CreateFixedProjectDTO): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.put(url, project);
}


// Method to delete a project by its ID
deleteProject(id: number): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url);
}




getProjectsFixedDashBoard(filters: FixedProjectFilters = {}): Observable<ProjectsResponse> {

  let params = new HttpParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(val => {
          params = params.append(key, val.toString());
        });
      } else if (value !== null && value !== undefined) {
        params = params.set(key, value.toString());
      }
    });

    return this.http.get<ProjectsResponse>(this.apiUrl, { params });

}
}



