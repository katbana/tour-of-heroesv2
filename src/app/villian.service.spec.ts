import { TestBed } from '@angular/core/testing';

import { VillianService } from './villian.service';

describe('VillianService', () => {
  let service: VillianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
