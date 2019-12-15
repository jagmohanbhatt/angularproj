import { TestBed } from '@angular/core/testing';

import { AirlineDataService } from './airline-data.service';

describe('AirlineDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirlineDataService = TestBed.get(AirlineDataService);
    expect(service).toBeTruthy();
  });
});
