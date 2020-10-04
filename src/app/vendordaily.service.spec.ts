import { TestBed } from '@angular/core/testing';

import { VendordailyService } from './vendordaily.service';

describe('VendordailyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendordailyService = TestBed.get(VendordailyService);
    expect(service).toBeTruthy();
  });
});
