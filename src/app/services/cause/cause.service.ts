import { Injectable } from '@angular/core';
import { Cause } from '../../models/cause.model';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CauseService {


  private cause!:Cause;
  baseUrl = environment.backendUrl;

  getAllCausesPath=environment.cause.getAllCauses;
  getCauseByIdPath=environment.cause.getCauseById;
  createCausePath=environment.cause.createCause;
  updateCausePath=environment.cause.updateCause;
  deleteCausePath=environment.cause.deleteCause;

  constructor(private http: HttpClient) { }

  getAllCauses(){
    return this.http.get<any>(this.baseUrl+this.getAllCausesPath);
  }

  getCauseById(id:number){
    let url =this.baseUrl+this.getCauseByIdPath;
    return this.http.get<any>(url+id);
  }

  createCause(cause:Cause){
    return this.http.post<any>(this.baseUrl+this.createCausePath, cause);
  }
  
  updateCause(cause:Cause){
    return this.http.put<any>(this.baseUrl+this.updateCausePath, cause);
  }

  deleteCause(id:number){
    let url =this.baseUrl+this.deleteCausePath;
    return this.http.delete<any>(url+id);
  }
}


