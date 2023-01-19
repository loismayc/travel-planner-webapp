import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-form",
    templateUrl: "./expense-form.component.html",
    styleUrls: ["./expense-form.component.scss"],
})
export class ExpenseFormComponent {
    @Input() myExpense: ExpenseItems = {
        id: 0,
        cost: 0,
        name: "",
        note: "",
        category_id: 0,
    };

    @Output() expenseEvent: EventEmitter<ExpenseItems> =
        new EventEmitter<ExpenseItems>();

    addButton = () => {
        console.log("Expense added!");

        const e = { ...this.myExpense };
        this.expenseEvent.emit(e);
    };
}
