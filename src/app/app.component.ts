import { Component } from "@angular/core";
import { BudgetItems } from "./models/budget-items";
import { ExpenseItems } from "./models/expense-item";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "budget-log-webapp";

    myBudget: BudgetItems[] = [];
    myExpense: ExpenseItems[] = [];

    formEventHandler = (payload: BudgetItems) => {
        console.log("Handling event handler");
        console.log(payload);

        this.myBudget.push(payload);
    };

    expenseHandler = (payload: ExpenseItems) => {
        console.log(payload);

        this.myExpense.push(payload);
    };
}
