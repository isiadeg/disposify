import { TestBed } from '@angular/core/testing';

import { DailytransactionService } from './dailytransaction.service';

describe('DailytransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailytransactionService = TestBed.get(DailytransactionService);
    expect(service).toBeTruthy();
  });
});
