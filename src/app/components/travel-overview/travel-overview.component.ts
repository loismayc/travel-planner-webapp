import { Component } from "@angular/core";
import { DestinationItems } from "../../models/destination-items";
import { TotalBudgetService } from "../../services/total-budget.service";

@Component({
    selector: "app-travel-overview",
    templateUrl: "./travel-overview.component.html",
    styleUrls: ["./travel-overview.component.scss"],
})
export class TravelOverviewComponent {
    destinations: DestinationItems[] = [];
    totalBudget = 0.0;

    constructor(private totalBudgetService: TotalBudgetService) {}

    handleDestination = (payload: DestinationItems) => {
        console.log(payload);
        this.destinations.push(payload);

        this.totalBudget = this.totalBudgetService.computeTotalBudget(
            this.destinations
        );
    };
}
