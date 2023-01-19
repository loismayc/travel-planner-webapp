import { Component } from "@angular/core";
import { ExpenseItems } from "../../models/expense-item";
import { TotalExpenseService } from "../../services/total-expense.service";

@Component({
    selector: "app-expense-items",
    templateUrl: "./expense-items.component.html",
    styleUrls: ["./expense-items.component.scss"],
})
export class ExpenseItemsComponent {
    expenses: ExpenseItems[] = [];
    totalExpenses = 0.0;
    categoryId: number;

    setCategoryId = (payload: any) => {
        this.categoryId = payload.id;
    };

    constructor(private totalExpenseService: TotalExpenseService) {}

    handleExpense = (payload: ExpenseItems) => {
        console.log(payload);
        payload.category_id = this.categoryId;
        this.expenses.push(payload);

        this.totalExpenses = this.totalExpenseService.computeTotalExpenses(
            this.expenses
        );
    };
}
