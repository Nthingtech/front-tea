import { TestBed } from '@angular/core/testing';

import { ChildListService } from './child-list.service';

describe('ChildListService', () => {
  let service: ChildListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
