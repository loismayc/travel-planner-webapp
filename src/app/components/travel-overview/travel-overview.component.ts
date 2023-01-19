import { Component } from "@angular/core";
import { DestinationItems } from "../../models/destination-items";

@Component({
    selector: "app-travel-overview",
    templateUrl: "./travel-overview.component.html",
    styleUrls: ["./travel-overview.component.scss"],
})
export class TravelOverviewComponent {
    destinations: DestinationItems[] = [];

    handleDestination = (payload: DestinationItems) => {
        console.log(payload);
        this.destinations.push(payload);
    };
}
