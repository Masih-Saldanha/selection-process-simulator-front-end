import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCandidateComponent } from './pages/add-candidate/add-candidate.component';
import { ShowCandidateStatusComponent } from './pages/show-candidate-status/show-candidate-status.component';
import { ShowApprovedCandidatesComponent } from './pages/show-approved-candidates/show-approved-candidates.component';
import { ControlCandidatesComponent } from './pages/control-candidates/control-candidates.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterApprovedListByNamePipe } from './filter-approved-list-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddCandidateComponent,
    ShowCandidateStatusComponent,
    ShowApprovedCandidatesComponent,
    ControlCandidatesComponent,
    HomeComponent,
    FilterApprovedListByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
