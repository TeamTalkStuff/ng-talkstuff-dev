import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStepTwoPageComponent } from './reg-step-two-page.component';

describe('RegStepTwoPageComponent', () => {
  let component: RegStepTwoPageComponent;
  let fixture: ComponentFixture<RegStepTwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStepTwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStepTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
