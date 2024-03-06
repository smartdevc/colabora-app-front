import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private project!: Project;
  baseUrl = environment.backendUrl
  getAllProjectPath=environment.project.getAllProject;
  getProjectByIdpath=environment.project.getProjectById;
  createProjectPath=environment.project.createProject;
  updateProjectPath=environment.project.updateProject;
  deleteProjectPath=environment.project.deleteProject;


  constructor(private http: HttpClient) { }

  getAllProject(){
    return this.http.get<any>(this.baseUrl+this.getAllProjectPath);
  }

  getProjectById(id:number){
    return this.http.get<any>(`${this.baseUrl}${this.getProjectByIdpath}/${id}`);
  }

  createProject(project:Project){
    return this.http.post<any>(this.baseUrl+this.createProjectPath, project);
  }
  
  updateProject(project:Project){
    return this.http.put<any>(this.baseUrl+this.updateProjectPath, project);
  }

  deleteProject(id:number){
    return this.http.delete<any>(`${this.baseUrl}${this.deleteProjectPath}/${id}`);
  }
}

