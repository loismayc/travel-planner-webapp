import { Injectable } from "@angular/core";
import { DestinationItems } from "../models/destination-items";

@Injectable({
    providedIn: "root",
})
export class BudgetService {

    computeTotalBudget = (budgetItems: DestinationItems[]): number => {
        let total = 0.0;

        budgetItems.forEach((budgetItem: DestinationItems) => {
            total = total + budgetItem.budget;
        });
        return total;
    };
}
