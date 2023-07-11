import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCandidateStatusComponent } from './show-candidate-status.component';

describe('ShowCandidateStatusComponent', () => {
  let component: ShowCandidateStatusComponent;
  let fixture: ComponentFixture<ShowCandidateStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCandidateStatusComponent]
    });
    fixture = TestBed.createComponent(ShowCandidateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
