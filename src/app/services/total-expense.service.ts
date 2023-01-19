import { Injectable } from "@angular/core";
import { ExpenseItems } from "../models/expense-item";

@Injectable({
    providedIn: "root",
})
export class TotalExpenseService {
    constructor() {
        console.log("constructor");
    }

    computeTotalExpenses = (expenseItems: ExpenseItems[]): number => {
        let total = 0.0;

        expenseItems.forEach((expenseItem: ExpenseItems) => {
            total = total + expenseItem.cost;
        });

        return total;
    };
}
