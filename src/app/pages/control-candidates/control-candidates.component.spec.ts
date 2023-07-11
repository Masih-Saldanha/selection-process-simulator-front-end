import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCandidatesComponent } from './control-candidates.component';

describe('ControlCandidatesComponent', () => {
  let component: ControlCandidatesComponent;
  let fixture: ComponentFixture<ControlCandidatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlCandidatesComponent]
    });
    fixture = TestBed.createComponent(ControlCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
