import { TestBed } from '@angular/core/testing';

import { SrsService } from './srs.service';

describe('SrsService', () => {
  let service: SrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
