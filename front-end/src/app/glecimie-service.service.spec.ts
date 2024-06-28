import { TestBed } from '@angular/core/testing';

import { GlecimieServiceService } from './glecimie-service.service';

describe('GlecimieServiceService', () => {
  let service: GlecimieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlecimieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
