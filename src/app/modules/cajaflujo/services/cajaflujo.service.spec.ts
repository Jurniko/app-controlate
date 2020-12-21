import { TestBed } from '@angular/core/testing';

import { CajaflujoService } from './cajaflujo.service';

describe('CajaflujoService', () => {
  let service: CajaflujoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CajaflujoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
