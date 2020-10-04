import { TestBed } from '@angular/core/testing';

import { RegistrationapprResolverService } from './registrationappr-resolver.service';

describe('RegistrationapprResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationapprResolverService = TestBed.get(RegistrationapprResolverService);
    expect(service).toBeTruthy();
  });
});
