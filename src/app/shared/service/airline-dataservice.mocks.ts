import { of } from 'rxjs';

export class AirlineDataServiceStub {
  getFlights() {
    return of({
      data: [
        {
          AirlineLogoAddress: 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/CZ.gif',
          AirlineName: 'China Southern Airlines',
          InboundFlightsDuration: '24:10',
          ItineraryId: '',
          OutboundFlightsDuration: '26:20',
          Stops: 2,
          TotalAmount: 2903.84
        },
        {
          AirlineLogoAddress: 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif',
          AirlineName: 'Emirates Airline',
          InboundFlightsDuration: '42:55',
          ItineraryId: '',
          OutboundFlightsDuration: '25:40',
          Stops: 2,
          TotalAmount: 2954.14
        },
        {
          AirlineLogoAddress: 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif',
          AirlineName: 'Emirates Airline',
          InboundFlightsDuration: '42:55',
          ItineraryId: '',
          OutboundFlightsDuration: '27:40',
          Stops: 2,
          TotalAmount: 2954.14
        }
      ]
    });
  }

  searchFlight() {
    return of({
      data: {
        AirlineLogoAddress: 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif',
        AirlineName: 'Emirates Airline',
        InboundFlightsDuration: '42:55',
        ItineraryId: '',
        OutboundFlightsDuration: '25:40',
        Stops: 2,
        TotalAmount: 2954.14
      },
    });
  }
}