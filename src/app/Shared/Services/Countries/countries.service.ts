import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


 private apiUrl = `${Environment.baseUrl}`;

  constructor(private _HttpClient:HttpClient) { }

  getCountries() {
    return this._HttpClient.get<any[]>(`${this.apiUrl}Country`);
  }

}
