import { Component, OnInit } from "@angular/core";
import { DestinationItems } from "../../models/destination-items";
import { BudgetService } from "../../services/budget.service";
import { TripsService } from "../../services/trips.service";

@Component({
    selector: "app-travel-overview",
    templateUrl: "./travel-overview.component.html",
    styleUrls: ["./travel-overview.component.scss"],
})
export class TravelOverviewComponent implements OnInit {
    destinations: DestinationItems[] = [];
    totalBudget = 0.0;

    constructor(
        private totalBudgetService: BudgetService,
        private tripService: TripsService
    ) {}

    ngOnInit(): void {
        console.log("ngOnInit() fired");

    
        this.tripService.getTrips().subscribe((destinations) => {
            this.destinations = destinations;
            console.log(this.destinations);

            this.destinations.forEach((destination) => {
                destination.days = this.tripService.computeDays([destination]);
              });
        });
        
       
    }

    handleDestination = (payload: DestinationItems) => {
        console.log(payload);
        this.destinations.push(payload);

        this.totalBudget = this.totalBudgetService.computeTotalBudget(
            this.destinations
        );
    };


}
