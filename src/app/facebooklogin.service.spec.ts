import { TestBed } from '@angular/core/testing';

import { FacebookloginService } from './facebooklogin.service';

describe('FacebookloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacebookloginService = TestBed.get(FacebookloginService);
    expect(service).toBeTruthy();
  });
});
