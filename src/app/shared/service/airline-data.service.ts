import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Itinerary } from '../model/itinerary.model';
import { Observable, throwError } from 'rxjs';
import { IItinerary } from 'src/app/operation/itinerary';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirlineDataService {

  private SERVER_URL = 'http://nmflightapi.azurewebsites.net/api/flight';

  constructor(private httpClient: HttpClient) { }

  public searchFlight(dcode: string, acode: string, ddate: string, adate: string): Observable<Itinerary[]> {
    return this.httpClient.get<Itinerary[]>(this.SERVER_URL, {
      params: {
        DepartureAirportCode: dcode,
        ArrivalAirportCode: acode,
        DepartureDate: ddate,
        ReturnDate: adate
      }
    }).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      map(flights => flights.map(flights => new Itinerary().deserialize(flights)))
    );
  }

  public get() {
    return this.httpClient.get<IItinerary[]>(this.SERVER_URL, {
      params: {
        DepartureAirportCode: 'a',
        ArrivalAirportCode: 'a',
        DepartureDate: 'd',
        ReturnDate: 'd'
      }
    });
  }
}

