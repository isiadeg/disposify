import { TestBed } from '@angular/core/testing';

import { SubscriptionviewService } from './subscriptionview.service';

describe('SubscriptionviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionviewService = TestBed.get(SubscriptionviewService);
    expect(service).toBeTruthy();
  });
});
