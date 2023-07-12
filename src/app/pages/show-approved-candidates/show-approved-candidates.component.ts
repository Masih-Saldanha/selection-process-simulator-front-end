import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-show-approved-candidates',
  templateUrl: './show-approved-candidates.component.html',
  styleUrls: ['./show-approved-candidates.component.css']
})
export class ShowApprovedCandidatesComponent implements OnInit {
  filterByName = "";
  aprovados: string[] = [];

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getApprovedList();
  }

  getApprovedList() {
    const observer: Observer<string[]> = {
      next: res => {
        this.aprovados = res;
        console.log(res);
      },
      error: e => {
        alert(e.error);
        console.log(e.error);
      },
      complete: () => { }
    }

    this.service.approved().subscribe(observer);
  }
}
