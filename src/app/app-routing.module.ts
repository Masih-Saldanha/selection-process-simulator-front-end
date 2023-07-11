import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './pages/add-candidate/add-candidate.component';
import { ShowCandidateStatusComponent } from './pages/show-candidate-status/show-candidate-status.component';
import { ShowApprovedCandidatesComponent } from './pages/show-approved-candidates/show-approved-candidates.component';
import { ControlCandidatesComponent } from './pages/control-candidates/control-candidates.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-candidate', component: AddCandidateComponent },
  { path: 'show-candidate-status', component: ShowCandidateStatusComponent },
  { path: 'show-approved-candidates', component: ShowApprovedCandidatesComponent },
  { path: 'control-candidates', component: ControlCandidatesComponent },
  { path: "**", redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
