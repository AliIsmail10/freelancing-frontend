import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';
import { Observable } from 'rxjs';
import { PortfolioImage } from '../../Interfaces/PortfolioImage';

@Injectable({
  providedIn: 'root'
})
export class PortfolioImageService {

  constructor(private myClient:HttpClient) { }

  apiURL = `${Environment.baseUrl}PortofolioProjectImage`;

  getImagesByProjectId():Observable<PortfolioImage[]> {
    return this.myClient.get<PortfolioImage[]>(`${this.apiURL}`);
  }
  // getPortfolioProjectImageById(id: number):Observable<PortfolioImage> {
  //   return this.myClient.get<PortfolioImage>(`${this.apiURL}/${id}`);
  // }
  UploadImage(data: any):Observable<PortfolioImageService> {
    return this.myClient.post<PortfolioImageService>(`${this.apiURL}/upload` , data);
  }
  // updatePortfolioProjectImage(data: any):Observable<PortfolioImageService> {
  //   return this.myClient.put<PortfolioImageService>(this.apiURL , data);
  // }
  deletePortfolioProjectImage(id: number):Observable<PortfolioImageService> {
    return this.myClient.delete<PortfolioImageService>(`${this.apiURL}/${id}`);
  }
}
