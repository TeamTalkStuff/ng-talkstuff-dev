import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStepFourPageComponent } from './reg-step-four-page.component';

describe('RegStepFourPageComponent', () => {
  let component: RegStepFourPageComponent;
  let fixture: ComponentFixture<RegStepFourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStepFourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStepFourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
