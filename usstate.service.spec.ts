import { TestBed } from '@angular/core/testing';

import { UsstateService } from './usstate.service';

describe('UsstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsstateService = TestBed.get(UsstateService);
    expect(service).toBeTruthy();
  });
});
