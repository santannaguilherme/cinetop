import { TestBed } from '@angular/core/testing';

import { FilmeApiService } from './filme-api.service';

describe('FilmeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmeApiService = TestBed.get(FilmeApiService);
    expect(service).toBeTruthy();
  });
});
