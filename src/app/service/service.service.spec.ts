import { TestBed, inject } from '@angular/core/testing';//Inject service for every test we run

import { Service} from './service.service';

describe('Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service]//
    });
  });

  // it('should be created', inject([Service], (service: Service) => {//inject service and expect service tobetruthy means its there or not if its null then it wil be false
  //   expect(service).toBeTruthy();//
  // }));
});
