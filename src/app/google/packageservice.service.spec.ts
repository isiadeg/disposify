import { TestBed } from '@angular/core/testing';

import { PackageserviceService } from './packageservice.service';

describe('PackageserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageserviceService = TestBed.get(PackageserviceService);
    expect(service).toBeTruthy();
  });
});
