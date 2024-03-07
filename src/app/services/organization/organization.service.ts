import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Organization } from '../../models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {


  private organization!:Organization;
  baseUrl = environment.backendUrl;

  getAllOrganizationPath=environment.organization.getAllOrganization;
  getOrganiozationByIdPath=environment.organization.getOrganizationById;
  createOrganizationPath=environment.organization.createOrganization;
  updateOrganizationPath=environment.organization.updateOrganization;
  deleteOrganizationPath=environment.organization.deleteOrganization;

  constructor(private http: HttpClient) { }

  getAllOrganization(){
    return this.http.get<any>(this.baseUrl+this.getAllOrganizationPath);
  }

  getOrganiozationById(id:number){
    let url =this.baseUrl+this.getOrganiozationByIdPath;
    return this.http.get<any>(url+id);
  }

  createOrganization(organization:Organization){
    return this.http.post<any>(this.baseUrl+this.createOrganizationPath, organization);
  }
  
  updateOrganization(organization:Organization){
    return this.http.put<any>(this.baseUrl+this.updateOrganizationPath, organization);
  }

  deleteOrganization(id:number){
    let url =this.baseUrl+this.deleteOrganizationPath;
    return this.http.delete<any>(url+id);
  }
}
