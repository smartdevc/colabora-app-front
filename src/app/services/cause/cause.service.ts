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


  constructor(private http: HttpClient) { }

  getAllCauses(){
    return this.http.get<any>(this.baseUrl);
  }

  getCauseById(id:number){
  }

  createCause(cause:Cause){}
  
  updateCause(cause:Cause){}

  deleteCause(id:number){}
}
