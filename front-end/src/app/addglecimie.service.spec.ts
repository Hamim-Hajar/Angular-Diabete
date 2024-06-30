import { TestBed } from '@angular/core/testing';

import { AddglecimieService } from './addglecimie.service';

describe('AddglecimieService', () => {
  let service: AddglecimieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddglecimieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
