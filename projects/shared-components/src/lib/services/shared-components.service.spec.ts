import { TestBed } from '@angular/core/testing';

import { SharedComponentsService } from './shared-components.service';

describe('SharedComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedComponentsService = TestBed.get(SharedComponentsService);
    expect(service).toBeTruthy();
  });
});
