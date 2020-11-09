import { TestBed } from '@angular/core/testing';

import { LayerManagementService } from './layer-management.service';

describe('LayerManagementService', () => {
  let service: LayerManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
