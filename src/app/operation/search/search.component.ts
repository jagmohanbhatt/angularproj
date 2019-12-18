import { Component, OnInit, Input } from '@angular/core';
import { AirlineDataService } from '../../shared/service/airline-data.service';
import { Itinerary } from 'src/app/shared/model/itinerary.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as moment from 'moment'; // add this 1 of 4
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public flights: Itinerary[];
  private filteredData: Itinerary[];
  private loading = false;
  private searched = false;
  private error: any;
  private isCollapsed = false;

  private departureCode: string;
  private arrivalCode: string;
  private departureDate: string;
  private arrivalDate: string;

  private airlineNameFilter: string;
  private airlineMinAmountFilter: string;
  private airlineMaxAmountFilter: string;

  constructor(private apiService: AirlineDataService) {
     }

  ngOnInit() {
  }

  getData() {
    this.loading = true;
    this.apiService.searchFlight(this.departureCode,
      this.arrivalCode,
      moment(this.departureDate).format(),
      moment(this.arrivalDate).format()).subscribe((data: Itinerary[]) => {
      this.flights = data;
      this.loading = false;
      this.searched = true;
    }, error => {
      this.error = error.message;
    });
  }

  filterData() {
    if (this.airlineNameFilter) {
      this.filteredData = this.flights;
      this.filteredData = this.flights.filter(d => d.AirlineName.includes(this.airlineNameFilter));
    } else {
      this.filterData = null;
    }
  }
}
