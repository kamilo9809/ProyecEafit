import { TestBed } from '@angular/core/testing';

import { SlideInicioService } from './slide-inicio.service';

describe('SlideInicioService', () => {
  let service: SlideInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
