import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStepOnePageComponent } from './reg-step-one-page.component';

describe('RegStepOnePageComponent', () => {
  let component: RegStepOnePageComponent;
  let fixture: ComponentFixture<RegStepOnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStepOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStepOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
