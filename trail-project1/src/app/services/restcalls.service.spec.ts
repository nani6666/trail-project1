import { TestBed, inject } from '@angular/core/testing';

import { RestcallsService } from './restcalls.service';

describe('RestcallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestcallsService]
    });
  });

  it('should be created', inject([RestcallsService], (service: RestcallsService) => {
    expect(service).toBeTruthy();
  }));
});
