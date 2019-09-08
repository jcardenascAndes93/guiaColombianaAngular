import { TestBed } from '@angular/core/testing';

import { LoginConfirmService } from './login-confirm.service';

describe('LoginConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginConfirmService = TestBed.get(LoginConfirmService);
    expect(service).toBeTruthy();
  });
});
