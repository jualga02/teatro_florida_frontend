import { TestBed } from '@angular/core/testing';

import { TeatroApiService } from './teatro-api.service';

describe('TeatroApiService', () => {
  let service: TeatroApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeatroApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
