import { TestBed } from '@angular/core/testing';

import { AuthTrackerService } from './auth-tracker.service';

describe('AuthTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthTrackerService = TestBed.get(AuthTrackerService);
    expect(service).toBeTruthy();
  });
});
