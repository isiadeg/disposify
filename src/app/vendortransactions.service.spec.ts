import { TestBed } from '@angular/core/testing';

import { VendortransactionsService } from './vendortransactions.service';

describe('VendortransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendortransactionsService = TestBed.get(VendortransactionsService);
    expect(service).toBeTruthy();
  });
});
