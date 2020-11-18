import { TestBed } from '@angular/core/testing';

import { ResultadoclinicoService } from './resultadoclinico.service';

describe('ResultadoclinicoService', () => {
  let service: ResultadoclinicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoclinicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
