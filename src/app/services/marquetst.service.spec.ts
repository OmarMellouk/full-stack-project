import { TestBed } from '@angular/core/testing';

import { MarquetstService } from './marquetst.service';

describe('MarquetstService', () => {
  let service: MarquetstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarquetstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
