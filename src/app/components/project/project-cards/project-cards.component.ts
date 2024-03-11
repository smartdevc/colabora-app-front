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
      this.projects.forEach((project, index) => {
        switch (index) {
          case 0:
            project.imageUrl = `https://www.bbva.com/wp-content/uploads/2023/06/Sostenibilidad-BBVA-Derecho-educacion-social.jpg`;
            break;
          case 1:
            project.imageUrl = `https://0701.static.prezi.com/preview/v2/una5yz5hhbk3vv5ipcqw4ohelx6jc3sachvcdoaizecfr3dnitcq_3_0.png`;
            break;
          case 2:
            project.imageUrl = `https://fibrosisquistica.org/wp-content/uploads/2020/12/montaje-meses-pildoras.png`;
            break;
          case 3:
            project.imageUrl = `https://cl.usembassy.gov/wp-content/uploads/sites/104/2016/12/D%C3%ADa-de-los-Derechos-Humanos-350x210.png`;
            break;
          case 4:
            project.imageUrl = `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibo6xpOqKGljvhsUcLO9wZAu7B2NLNhNCD-sKLygwP4QT1TEan57oRa6WnNxojyz0ZVS1dwciPujHUPtWQ-VpqcScVSp8smcshQIOXrGr8zpHpk-CY2nESEP0bBseQnmmN8kDFUHwwOMk/s1600/Promoci%25C3%25B3n+de+la+salud.jpg`;
            break;
          case 5:
            project.imageUrl = `https://www.ups.edu.ec/documents/20121/190281/683GYE-1.png/a2a22196-4854-33ba-770c-85eec8ca6c62?t=1627499547785`;
            break;
          case 6:
            project.imageUrl = `https://www.pabsmr.org/wp-content/uploads/2022/07/C%C3%B3mo-ofrecer-apoyo-social-a-los-grupos-vulnerables-870x475.png`;
            break;
          case 7:
            project.imageUrl = `https://mundoejecutivo.com.mx/wp-content/uploads/2023/03/image-8.jpg`;
            break;
          case 8:
            project.imageUrl = `https://s1.eestatic.com/2021/08/29/enclave-ods/607951069_203642766_1706x960.jpg`;
            break;
          case 9:
            project.imageUrl = `https://www.xn--niezysociedadeconsumo-dbc.cl/wp-content/uploads/2021/12/ilus_acoval01-1024x653.jpg`;
            break;
          case 10:
            project.imageUrl = `https://definicion.de/wp-content/uploads/2013/07/programa-educativo.jpg`;
            break;
          case 11:
            project.imageUrl = `https://0701.static.prezi.com/preview/v2/una5yz5hhbk3vv5ipcqw4ohelx6jc3sachvcdoaizecfr3dnitcq_3_0.png`;
            break;
          case 12:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 13:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 14:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 15:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 16:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 17:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 18:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 19:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 20:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 21:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 22:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 23:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 24:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 25:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 26:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 27:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 28:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          case 29:
            project.imageUrl = `https://example.com/images/project5.jpg`;
            break;
          default:
            project.imageUrl = '';
        }
      });
    });
  }
}
