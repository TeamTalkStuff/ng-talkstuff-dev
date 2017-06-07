import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAttachmentsComponent } from './media-attachments.component';

describe('MediaAttachmentsComponent', () => {
  let component: MediaAttachmentsComponent;
  let fixture: ComponentFixture<MediaAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
