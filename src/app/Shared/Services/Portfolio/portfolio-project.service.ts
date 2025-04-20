import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectService {

  constructor(private myClient:HttpClient) { } 
  
  apiURL = `${Environment.baseUrl}PortofolioProject`;
}
