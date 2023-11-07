import { TestBed } from '@angular/core/testing';

import { OrgaService } from './orga.service';

describe('OrgaService', () => {
  let service: OrgaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
