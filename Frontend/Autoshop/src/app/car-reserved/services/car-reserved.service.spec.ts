import { TestBed } from '@angular/core/testing';

import { CarReservedService } from './car-reserved.service';

describe('CarReservedService', () => {
  let service: CarReservedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarReservedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
