import { TestBed } from '@angular/core/testing';

import { RequestinterceptService } from './requestintercept.service';

describe('RequestinterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestinterceptService = TestBed.get(RequestinterceptService);
    expect(service).toBeTruthy();
  });
});
