import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private project!: Project;
  baseUrl = environment.backendUrl
  getAllProjectPath=environment.project.getAllProject;
  getProjectByIdPath=environment.project.getProjectById;
  createProjectPath=environment.project.createProject;
  updateProjectPath=environment.project.updateProject;
  deleteProjectPath=environment.project.deleteProject;


  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl+this.getAllProjectPath);
  }

  getProjectById(id:number){
    let url = this.baseUrl+this.getProjectByIdPath;
    return this.http.get<any>(url+id);
  }

  createProject(project:Project){
    return this.http.post<any>(this.baseUrl+this.createProjectPath, project);
  }
  
  updateProject(project:Project){
    return this.http.put<any>(this.baseUrl+this.updateProjectPath, project);
  }

  deleteProject(id:number){
    let url = this.baseUrl+this.deleteProjectPath;
    return this.http.delete<any>(url+id);
  }
}