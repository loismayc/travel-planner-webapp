import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

    /* baseUrl: string = "http://localhost:5000"

  constructor(private http: HttpClient) { }
  getAll = (): Observable<ExpenseItems[]> => {
    let items: Observable<ExpenseItems[]>

    items = this.http.get<ExpenseItems[]>(`${this.baseUrl}/expenses`)
    return items
  }*/
}
