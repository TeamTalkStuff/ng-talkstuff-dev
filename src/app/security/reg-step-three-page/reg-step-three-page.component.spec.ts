import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStepThreePageComponent } from './reg-step-three-page.component';

describe('RegStepThreePageComponent', () => {
  let component: RegStepThreePageComponent;
  let fixture: ComponentFixture<RegStepThreePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStepThreePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStepThreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
