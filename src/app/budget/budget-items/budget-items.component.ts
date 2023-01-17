import { Component } from "@angular/core";
import { BudgetItems } from "../../models/budget-items";

@Component({
    selector: "app-budget-items",
    templateUrl: "./budget-items.component.html",
    styleUrls: ["./budget-items.component.scss"],
})
export class BudgetItemsComponent {
    myBudget: BudgetItems[] = [
        {
            id: 1,
            amount: 20000.0,
            remaining: 2000.0,
            category: "Travel",
        },
        {
            id: 2,
            amount: 5000.0,
            remaining: 10.0,
            category: "Bills",
        },
        {
            id: 3,
            amount: 2000.0,
            remaining: 150.0,
            category: "Health",
        },
        {
            id: 4,
            amount: 500.0,
            remaining: 100.0,
            category: "Concert",
        },
    ];

    totalBudget = 200000;
    totalExpense = 150000;
    remaining = 50000;
}
