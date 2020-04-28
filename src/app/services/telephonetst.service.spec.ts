import { TestBed } from '@angular/core/testing';

import { TelephonetstService } from './telephonetst.service';

describe('TelephonetstService', () => {
  let service: TelephonetstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelephonetstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
