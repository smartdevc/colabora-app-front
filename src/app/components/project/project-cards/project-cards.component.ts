import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import { Project } from '../../../models/project';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css'
})
export class ProjectCardsComponent {


  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }

  projects?: Project[];

  
  loadProjects(){
    this.projectService.getAllProjects()
    .subscribe(
      (resp)=> {
        this.projects = resp;            
      }
    );       
    
  }

}
