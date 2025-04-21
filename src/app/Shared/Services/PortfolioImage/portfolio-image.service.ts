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
  
  UploadImage(file: File):Observable<PortfolioImageService> {
    const formData = new FormData();
    formData.append('ImageFile', file, file.name);
    return this.myClient.post<PortfolioImageService>(`${this.apiURL}/upload` , formData);
  }
 
  deletePortfolioProjectImage(id: number):Observable<PortfolioImageService> {
    return this.myClient.delete<PortfolioImageService>(`${this.apiURL}/${id}`);
  }
}
