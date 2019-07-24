import { TestBed } from '@angular/core/testing';

import { MomsService } from './moms.service';

describe('MomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MomsService = TestBed.get(MomsService);
    expect(service).toBeTruthy();
  });
});
