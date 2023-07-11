import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCandidateComponent } from './pages/add-candidate/add-candidate.component';
import { ShowCandidateStatusComponent } from './pages/show-candidate-status/show-candidate-status.component';
import { ShowApprovedCandidatesComponent } from './pages/show-approved-candidates/show-approved-candidates.component';
import { ControlCandidatesComponent } from './pages/control-candidates/control-candidates.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCandidateComponent,
    ShowCandidateStatusComponent,
    ShowApprovedCandidatesComponent,
    ControlCandidatesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
