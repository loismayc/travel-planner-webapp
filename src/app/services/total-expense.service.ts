import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ExpenseItems } from "../models/expense-item";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
    }),
};

@Injectable({
    providedIn: "root",
})
export class TotalExpenseService {
    baseUrl = "http://localhost:5000";

    constructor(private http: HttpClient) {
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
