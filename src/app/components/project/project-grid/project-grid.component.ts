import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/project/project.service';
@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrl: './project-grid.component.css'
})
export class ProjectGridComponent {


  displayedColumns: string[] = ['name', 'description', 'dateStart', 'dateEnd'];
  dataSource = new MatTableDataSource<Project>(this.projects);

  constructor(private projectService: ProjectService) { }

  projects?: Project[];



  ngOnInit() {
    this.loadProjects();
  }

  loadProjects(){
    this.projectService.getAllProjects()
    .subscribe(
      (resp)=> {
        this.projects = resp;
        this.dataSource.data = this.projects;        
      }
    );       
    
  }
}
