import { TestBed } from '@angular/core/testing';

import { UsuarioApiStoreService } from './usuario-api-store.service';

describe('UsuarioApiStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioApiStoreService = TestBed.get(UsuarioApiStoreService);
    expect(service).toBeTruthy();
  });
});
