import { TestBed } from '@angular/core/testing';

import { SourceCastleService } from './source-castle.service';

describe('SourceCastleService', () => {
  let service: SourceCastleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceCastleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
