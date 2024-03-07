import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CauseComponent } from './components/cause/cause.component';
import { CauseListComponent } from './components/cause/cause-list/cause-list.component';
import { CauseModalComponent } from './components/cause/cause-modal/cause-modal.component';
import { CauseGridComponent } from './components/cause/cause-grid/cause-grid.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProjectGridComponent } from './components/project/project-grid/project-grid.component';
import { ProjectModalComponent } from './components/project/project-modal/project-modal.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ProjectCardsComponent } from './components/project/project-cards/project-cards.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CauseComponent,
    CauseListComponent,
    CauseModalComponent,
    CauseGridComponent,
    ProjectGridComponent,
    ProjectModalComponent,
    ProjectCardsComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
