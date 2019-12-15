import { Component, OnInit, Input } from '@angular/core';
import { AirlineDataService } from '../../shared/service/airline-data.service';
import { Itinerary } from 'src/app/shared/model/itinerary.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public products: Itinerary[];
  private loading = false;
  public error: any;

  public departureCode: string;
  public arrivalCode: string;
  public departureDate: string;
  public arrivalDate: string;

  constructor(private apiService: AirlineDataService) { }

  ngOnInit() {
  }

  getData() {
    this.loading = true;
    this.apiService.searchFlight(this.departureCode,
      this.arrivalCode,
      this.departureDate,
      this.arrivalDate).subscribe((data: Itinerary[]) => {
      this.products = data;
      this.loading = false;
    }, error => {
      this.error = error.message;
    });
  }
}
