import { TestBed } from '@angular/core/testing';

import { RequestHandlingService } from './request-handling.service';

describe('RequestHandlingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestHandlingService = TestBed.get(RequestHandlingService);
    expect(service).toBeTruthy();
  });
});
