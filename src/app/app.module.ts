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

@NgModule({
  declarations: [
    AppComponent,
    CauseComponent,
    CauseListComponent,
    CauseModalComponent,
    CauseGridComponent,
    ProjectGridComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
