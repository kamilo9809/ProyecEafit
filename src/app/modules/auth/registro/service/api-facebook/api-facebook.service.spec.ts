import { TestBed } from '@angular/core/testing';

import { ApiFacebookService } from './api-facebook.service';

describe('ApiFacebookService', () => {
  let service: ApiFacebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFacebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
