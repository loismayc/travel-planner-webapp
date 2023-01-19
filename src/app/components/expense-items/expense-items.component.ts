import { Component } from "@angular/core";
import { Categories } from "../../models/categories";
import { ExpenseItems } from "../../models/expense-item";
import { TotalExpenseService } from "../../services/total-expense.service";

@Component({
    selector: "app-expense-items",
    templateUrl: "./expense-items.component.html",
    styleUrls: ["./expense-items.component.scss"],
})
export class ExpenseItemsComponent {
    categories: Categories[] = [
        {
            id: 1,
            title: "Travel",
        },
        {
            id: 2,
            title: "Bills",
        },
        {
            id: 3,
            title: "Health",
        },
        {
            id: 4,
            title: "Concert",
        },
    ];
    expenses: ExpenseItems[] = [];
    totalExpenses = 0.0;

    constructor(private totalExpenseService: TotalExpenseService) {}

    handleExpense = (payload: ExpenseItems) => {
        console.log(payload);
        this.expenses.push(payload);

        this.totalExpenses = this.totalExpenseService.computeTotalExpenses(
            this.expenses
        );
    };
}
