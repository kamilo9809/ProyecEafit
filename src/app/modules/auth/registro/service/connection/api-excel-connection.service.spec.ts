import { TestBed } from '@angular/core/testing';

import { ApiExcelConnectionService } from '../api-excel-connection.service';

describe('ApiExcelConnectionService', () => {
  let service: ApiExcelConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExcelConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
