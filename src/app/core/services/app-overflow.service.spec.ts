import { TestBed } from '@angular/core/testing';

import { AppOverflowService } from './app-overflow.service';

describe('AppOverflowService', () => {
  let service: AppOverflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppOverflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
