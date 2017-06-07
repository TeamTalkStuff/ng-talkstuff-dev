import { TestBed, inject } from '@angular/core/testing';

import { UploaderService } from './uploader.service';

describe('UploaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploaderService]
    });
  });

  it('should ...', inject([UploaderService], (service: UploaderService) => {
    expect(service).toBeTruthy();
  }));
});
