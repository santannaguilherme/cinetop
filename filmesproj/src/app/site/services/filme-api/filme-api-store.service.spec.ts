import { TestBed } from '@angular/core/testing';

import { FilmeApiStoreService } from './filme-api-store.service';

describe('FilmeApiStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmeApiStoreService = TestBed.get(FilmeApiStoreService);
    expect(service).toBeTruthy();
  });
});
