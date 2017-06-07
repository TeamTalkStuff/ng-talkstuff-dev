import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFeatureComponent } from './page-feature-component.component';

describe('PageFeatureComponent', () => {
  let component: PageFeatureComponent;
  let fixture: ComponentFixture<PageFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
