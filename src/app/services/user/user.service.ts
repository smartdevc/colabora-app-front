import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user!:User;
  baseUrl = environment.backendUrl;

  getAllUserPath=environment.user.getAllUser;
  getUserByIdPath=environment.user.getUserById;
  createUserPath=environment.user.createUser;
  updateUserPath=environment.user.updateUser;
  deleteUserPath=environment.user.deleteUser;

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get<any>(this.baseUrl+this.getAllUserPath);
  }

  getUserById(id:number){
    let url =this.baseUrl+this.getUserByIdPath;
    return this.http.get<any>(url+id);
  }

  createUser(user:User){
    return this.http.post<any>(this.baseUrl+this.createUserPath, user);
  }
    
  updateUser(user:User){
    return this.http.put<any>(this.baseUrl+this.updateUserPath, user);
  }

  deleteUser(id:number){
    let url =this.baseUrl+this.deleteUserPath;
    return this.http.delete<any>(url+id);
  }
}
