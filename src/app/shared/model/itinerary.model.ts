import { Deserializable } from './deserialize.model';

export class Itinerary implements Deserializable {
    AirlineLogoAddress: string;
    AirlineName: string;
    InboundFlightsDuration: string;
    ItineraryId: number;
    OutboundFlightsDuration: string;
    Stops: number;
    TotalAmount: number;


    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
