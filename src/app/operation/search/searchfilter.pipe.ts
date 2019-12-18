import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { Itinerary } from 'src/app/shared/model/itinerary.model';

@Pipe({
  name: 'searchFilter'
})
@Injectable()
export class SearchFilter implements PipeTransform {
  transform(d: Itinerary[], airlineName: string, minAmount: number, maxAmount: number): any {
    if (d && d.length) {
        return d.filter(data => {
            if (airlineName && data.AirlineName.toLowerCase().indexOf(airlineName.toLowerCase()) === -1) {
                return false;
            }

            if (minAmount && data.TotalAmount <= minAmount) {
                return false;
            }

            if (maxAmount && data.TotalAmount >= maxAmount) {
                return false;
            }

            return true;
        });
    }
  }
}

