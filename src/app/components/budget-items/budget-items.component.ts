import { Component } from "@angular/core";
import { BudgetItems } from "../../models/budget-items";

@Component({
    selector: "app-budget-items",
    templateUrl: "./budget-items.component.html",
    styleUrls: ["./budget-items.component.scss"],
})
export class BudgetItemsComponent {
    totalBudget = 200000;
    totalExpense = 150000;
    remaining = 50000;

    budgets: BudgetItems[] = [];
    handleBudget = (payload: BudgetItems) => {
        console.log(payload);
        this.budgets.push(payload);
    };
}
