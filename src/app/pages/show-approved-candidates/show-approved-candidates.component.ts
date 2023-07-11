import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-show-approved-candidates',
  templateUrl: './show-approved-candidates.component.html',
  styleUrls: ['./show-approved-candidates.component.css']
})
export class ShowApprovedCandidatesComponent {
  filterByName = "";
  aprovados = ["Pessoa 1", "Pessoa 2", "Pessoa 3"];

  constructor(private service: AppService) { }
}
