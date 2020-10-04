import { TestBed, async, inject } from '@angular/core/testing';

import { CollectorGuard } from './collector.guard';

describe('CollectorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectorGuard]
    });
  });

  it('should ...', inject([CollectorGuard], (guard: CollectorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
