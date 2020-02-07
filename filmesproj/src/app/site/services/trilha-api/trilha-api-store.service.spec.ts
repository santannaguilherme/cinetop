import { TestBed } from '@angular/core/testing';

import { TrilhaApiStoreService } from './trilha-api-store.service';

describe('TrilhaApiStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrilhaApiStoreService = TestBed.get(TrilhaApiStoreService);
    expect(service).toBeTruthy();
  });
});
