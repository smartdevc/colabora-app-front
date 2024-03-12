import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import { Project } from '../../../models/project';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css'], // Cambié 'styleUrl' a 'styleUrls'
})
export class ProjectCardsComponent {
  constructor(private projectService: ProjectService) {}

  projects?: Project[];

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProjects().subscribe((resp) => {
      this.projects = resp;
      });
    };
  }
