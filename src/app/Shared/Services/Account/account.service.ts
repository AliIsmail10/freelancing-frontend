import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../base/environment';
import { AppUsers, ClientsFilter, ClientsView, ClientView, CreateAdminDTO, EditProfileDTO, FilteredClients, FilteredFreelancers, ForgotPasswordDTO, Freelancers, FreelancersFilter, FreelancerView, IdentityVerificationRequest, LoginDTO, RefreshTokenDTO, RegisterDTO, ResetPasswordDTO, SingularFreelancer, Tokens, UserRole, UsersRequestingVerificaiton, VerificationDecision } from '../../Interfaces/Account';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 private apiUrl = `${Environment.baseUrl}Account`;

  constructor(private _HttpClient:HttpClient) { }
  getFreeAgents():Observable<Freelancers> {
      return this._HttpClient.get<Freelancers>(`${this.apiUrl}/FreeAgents`);
    }
    getFreeAgentsFiltered(filters: FreelancersFilter): Observable<FilteredFreelancers> {
      let params = new HttpParams();

    // Loop through the filters and convert them to query parameters
    for (const key in filters) {
      const value = filters[key as keyof FreelancersFilter];

      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            value.forEach(v => {
              params = params.append(key, String(v)); // use append for repeated params
            });
          }
        } else if (typeof value === 'boolean') {
          params = params.set(key, value ? 'true' : 'false');
        } else {
          params = params.set(key, String(value));
        }
      }
    }

    return this._HttpClient.get<FilteredFreelancers>(`${this.apiUrl}/FilteredFreeAgents`, { params });
    }

    getFreelancerByUsername(username:string):Observable<SingularFreelancer>{
      return this._HttpClient.get<SingularFreelancer>(`${this.apiUrl}/FreeAgent/${username}`);

    }

    getClients():Observable<ClientsView> {
      return this._HttpClient.get<ClientsView>(`${this.apiUrl}/Clients`);
    }


    getClientsFiltered(filters: ClientsFilter): Observable<FilteredClients> {
      let params = new HttpParams();

    // Loop through the filters and convert them to query parameters
    for (const key in filters) {
      const value = filters[key as keyof ClientsFilter];

      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            value.forEach(v => {
              params = params.append(key, String(v)); // use append for repeated params
            });
          }
        } else if (typeof value === 'boolean') {
          params = params.set(key, value ? 'true' : 'false');
        } else {
          params = params.set(key, String(value));
        }
      }
    }

    return this._HttpClient.get<FilteredClients>(`${this.apiUrl}/FilteredClients`, { params });
    }

    getClientByUsername(username:string):Observable<ClientView>{
      return this._HttpClient.get<ClientView>(`${this.apiUrl}/Clients/${username}`);

    }



    getUsers():Observable<AppUsers> {
      return this._HttpClient.get<AppUsers>(`${this.apiUrl}/GetAllUsers`);
    }

    getUserIdentityPicture(userid:string):Observable<string> {
      return this._HttpClient.get<string>(`${this.apiUrl}/getUserIdentityPicture?userid=${userid}`);
    }

    getUsersRequestingVerifications():Observable<UsersRequestingVerificaiton>{
      return this._HttpClient.get<UsersRequestingVerificaiton>(`${this.apiUrl}/getUsersRequestingVerifications`);
    }

    RequestIdentityVerification(req:FormData):Observable<string>
    {

      return this._HttpClient.post<string>(`${this.apiUrl}/RequestIdentityVerification`,req);
    }
    VerifyIdentity(decision:VerificationDecision):Observable<string>{
      return this._HttpClient.post<string>(`${this.apiUrl}/ManageVerificationRequest`,decision);

    }


    EditProfile(profileData:EditProfileDTO):Observable<string>{
      const formData = new FormData();
    
      // Append all text fields
      formData.append('firstname', profileData.firstname);
      formData.append('lastname', profileData.lastname);
      formData.append('city', profileData.city);
      formData.append('userName', profileData.userName);
      formData.append('description', profileData.description || '');
      if (profileData.dateOfBirth instanceof Date) {
        const year = profileData.dateOfBirth.getFullYear();
        const month = String(profileData.dateOfBirth.getMonth() + 1).padStart(2, '0');
        const day = String(profileData.dateOfBirth.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        formData.append('dateOfBirth', formattedDate);
    }

      formData.append('phoneNumber', profileData.phoneNumber);
      formData.append('password', profileData.password);
      if (profileData.confirmPassword) {
        formData.append('confirmPassword', profileData.confirmPassword);
      }
      
      // Append file if exists
      if (profileData.profilePicture) {
        formData.append('profilePicture', profileData.profilePicture);
      }
  
      return this._HttpClient.put<string>(`${this.apiUrl}/EditProfile`, formData);
    }
  

    MakeAdmin(userId:string):Observable<string>{
      return this._HttpClient.post<string>(`${this.apiUrl}/MakeAdmin`,JSON.stringify(userId), 
      {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      });

    }
    RemoveAdmin(userId:string):Observable<string>{
      return this._HttpClient.post<string>(`${this.apiUrl}/RemoveAdmin`,JSON.stringify(userId), 
      {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      });

    }

    CreateAdminAccount(AdminData:CreateAdminDTO):Observable<string>{
      const formData = new FormData();
    
    formData.append('firstname', AdminData.firstname);
    formData.append('lastname', AdminData.lastname);
    formData.append('cityId', AdminData.cityId.toString());
    formData.append('userName', AdminData.userName);
    formData.append('email', AdminData.email);
    formData.append('phoneNumber', AdminData.phoneNumber);
    formData.append('password', AdminData.password);
    
    if (AdminData.confirmPassword) {
        formData.append('confirmPassword', AdminData.confirmPassword);
    }
    
    // Handle DateOnly format
    formData.append('dateOfBirth', AdminData.dateOfBirth);
    
    if (AdminData.profilePicture) {
        formData.append('profilePicture', AdminData.profilePicture);
    }

    return this._HttpClient.post<string>(`${this.apiUrl}/CreateAdminAccount`, formData);

    }


    Register(registerData: RegisterDTO): Observable<string> {
      const formData = new FormData();
      
      formData.append('firstname', registerData.firstname);
      formData.append('lastname', registerData.lastname);
      formData.append('cityId', registerData.cityId.toString());
      formData.append('userName', registerData.userName);
      formData.append('email', registerData.email);
      formData.append('phoneNumber', registerData.phoneNumber);
      formData.append('password', registerData.password);
      formData.append('role', registerData.role);
      
      if (registerData.confirmPassword) {
          formData.append('confirmPassword', registerData.confirmPassword);
      }
      
      formData.append('dateOfBirth', registerData.dateOfBirth);
      
      if (registerData.profilePicture) {
          formData.append('profilePicture', registerData.profilePicture);
      }
  
      return this._HttpClient.post<string>(`${this.apiUrl}/Register`, formData);
  }



  Login(dto:LoginDTO):Observable<Tokens>{
    return this._HttpClient.post<Tokens>(`${this.apiUrl}/Login`,dto);
  }

  RefreshToken(dto:RefreshTokenDTO):Observable<Tokens>{
    return this._HttpClient.post<Tokens>(`${this.apiUrl}/Refresh-Token`,dto);
  }
  ForgotPassword(dto:ForgotPasswordDTO,reseturl:string):Observable<string>
  {
    return this._HttpClient.post<string>(`${this.apiUrl}/ForgotPassword?reseturl=${reseturl}`,dto);
  }

  ResetPassword(dto:ResetPasswordDTO):Observable<string>{
    return this._HttpClient.post<string>(`${this.apiUrl}/ResetPassword`,dto);
  }



  ResendEmailConfirmation(email:string):Observable<string>{
    return this._HttpClient.get<string>(`${this.apiUrl}/ResendEmailConfirmation`,{
      params: new HttpParams().set('emailToBeCONFIRMED', email)
  });
  
 
}
ExternalLogin(provider: string, role: UserRole, returnUrl?: string, errorUrl?: string): void {
  const params = new HttpParams()
      .set('provider', provider)
      .set('role', role)
      .set('returnUrl', returnUrl || '')
      .set('errorurl', errorUrl || '');
      const url = `${this.apiUrl}/External-login?${params.toString()}`;
      window.location.href = url;

}
}
    // getProfile(): Observable<EditProfileDTO> {
    //   return this.http.get<EditProfileDTO>(`${this.apiUrl}`);
    // }
    
  
