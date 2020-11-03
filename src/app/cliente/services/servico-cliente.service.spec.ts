import { TestBed } from '@angular/core/testing';

import { ServicoClienteService } from './servico-cliente.service';

describe('ServicoClienteService', () => {
  let service: ServicoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
