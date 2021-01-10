import { TestBed } from '@angular/core/testing';

import { SharedVirtusService } from './shared-virtus.service';

describe('SharedVirtusService', () => {
  let service: SharedVirtusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedVirtusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
