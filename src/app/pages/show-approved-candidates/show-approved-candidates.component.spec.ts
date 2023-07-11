import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApprovedCandidatesComponent } from './show-approved-candidates.component';

describe('ShowApprovedCandidatesComponent', () => {
  let component: ShowApprovedCandidatesComponent;
  let fixture: ComponentFixture<ShowApprovedCandidatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowApprovedCandidatesComponent]
    });
    fixture = TestBed.createComponent(ShowApprovedCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
