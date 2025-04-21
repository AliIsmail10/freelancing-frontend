import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectService {

  constructor(private myClient:HttpClient) { } 
  
  apiURL = `${Environment.baseUrl}PortofolioProject`;

  getAllPortfolioProjects():Observable<any> {
    return this.myClient.get(this.apiURL);
  }
  getPortfolioProjectById(id: number):Observable<any> {
    return this.myClient.get(this.apiURL  + id);
  }
  addPortfolioProject(data: any):Observable<any> {
    return this.myClient.post(this.apiURL + '/AddPortfolioProject', data);
  }
  updatePortfolioProject(data: any):Observable<any> {
    return this.myClient.put(this.apiURL + '/UpdatePortfolioProject', data);
  }
  deletePortfolioProject(id: number):Observable<any> {
    return this.myClient.delete(this.apiURL + '/DeletePortfolioProject/' + id);
  }
}
