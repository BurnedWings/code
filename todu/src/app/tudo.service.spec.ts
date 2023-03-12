import { TestBed } from '@angular/core/testing';

import { TudoService } from './tudo.service';

describe('TudoService', () => {
  let service: TudoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TudoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
