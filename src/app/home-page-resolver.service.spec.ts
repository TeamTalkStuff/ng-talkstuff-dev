import { TestBed, inject } from '@angular/core/testing';

import { HomePageResolverService } from './home-page-resolver.service';

describe('HomePageResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomePageResolverService]
    });
  });

  it('should ...', inject([HomePageResolverService], (service: HomePageResolverService) => {
    expect(service).toBeTruthy();
  }));
});
