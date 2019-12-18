import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AirlineDataService } from './airline-data.service';
import { Itinerary } from '../model/itinerary.model';
import { Observable } from 'rxjs';
import { AirlineDataServiceStub } from './airline-dataservice.mocks';

describe('Service: AirlineDataService', () => {
  let service: AirlineDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [AirlineDataService, AirlineDataServiceStub]
      });
      service = TestBed.get(AirlineDataService);
      httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
      httpTestingController.verify();
  });

  it('Request should return flight data in json',
      fakeAsync(() => {
          const response = {
              resultCount: 1,
              results: [
                  {
                    AirlineLogoAddress: 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif',
                    AirlineName: 'Emirates Airline',
                    InboundFlightsDuration: '42:55',
                    ItineraryId: '',
                    OutboundFlightsDuration: '25:40',
                    Stops: 2,
                    TotalAmount: 2954.14
                  }
              ]
          };

          const data = 'Invalid request parameters';
          let resp: any;
          let errResponse: any;
          // tslint:disable-next-line: no-shadowed-variable
          service.searchFlight('MEL', 'LHR', '2019-12-11T00:00:00+11:00', '2019-12-19T00:00:00+11:00')
          .subscribe(res => resp = res, err => errResponse = err);
          // tslint:disable-next-line: max-line-length
          const req = httpTestingController.expectOne('http://nmflightapi.azurewebsites.net/api/flight?DepartureAirportCode=MEL&ArrivalAirportCode=LHR&DepartureDate=2019-12-11T00:00:00+11:00&ReturnDate=2019-12-19T00:00:00+11:00');
          expect(req.request.method).toEqual('GET');
          expect(response.results[0].AirlineName).toBe('Emirates Airline');
          req.flush(data, errResponse);

          tick();

      })
  );
});
