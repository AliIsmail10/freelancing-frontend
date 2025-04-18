import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';
import { Observable } from 'rxjs';
import { Certificate } from '../../Interfaces/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
    private apiUrl = `${Environment.baseUrl}`;

  constructor(private _HttpClient:HttpClient) { }

  getCertificateByid(id: number):Observable<Certificate> {
    return this._HttpClient.get<Certificate>(`${this.apiUrl}Certificates/${id}`);
  }

  updateCertificate(id: number, certificate: Certificate): Observable<Certificate> {
    return this._HttpClient.put<Certificate>(`${this.apiUrl}Certificates/${id}`, certificate);
  }

  deleteCertificate(id: number): Observable<void> {
    return this._HttpClient.delete<void>(`${this.apiUrl}Certificates/${id}`);
  }

  addCertificate(certificate: Certificate): Observable<Certificate> {
    return this._HttpClient.post<Certificate>(`${this.apiUrl}Certificates`, certificate);
  }

  getAllCertificates(): Observable<Certificate[]> {
    return this._HttpClient.get<Certificate[]>(`${this.apiUrl}Certificates`);
  }

  getCertificateByUserId(userId: string): Observable<Certificate[]> {
    return this._HttpClient.get<Certificate[]>(`${this.apiUrl}Certificates/active/${userId}`);
  }

  getCertificateByUseName(username: string): Observable<Certificate[]> {
    return this._HttpClient.get<Certificate[]>(`${this.apiUrl}Certificates/user/${username}`);
  }
}
