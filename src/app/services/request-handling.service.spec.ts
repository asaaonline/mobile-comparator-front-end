import { TestBed } from '@angular/core/testing';

import { SearchRequestHandlingService } from './search-request-handling.service';

describe('SearchRequestHandlingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchRequestHandlingService = TestBed.get(SearchRequestHandlingService);
    expect(service).toBeTruthy();
  });
});
