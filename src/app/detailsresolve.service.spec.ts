import { TestBed } from '@angular/core/testing';

import { DetailsresolveService } from './detailsresolve.service';

describe('DetailsresolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsresolveService = TestBed.get(DetailsresolveService);
    expect(service).toBeTruthy();
  });
});
