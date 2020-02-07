import { TestBed } from '@angular/core/testing';

import { trilhaApiService } from './trilha-api.service';

describe('TrilhaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: trilhaApiService = TestBed.get(trilhaApiService);
    expect(service).toBeTruthy();
  });
});
