import { TestBed } from '@angular/core/testing';

import { HealthPietasService } from './health-pietas.service';

describe('HealthPietasService', () => {
  let service: HealthPietasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthPietasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
