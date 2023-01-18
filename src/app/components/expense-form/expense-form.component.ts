import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-form",
    templateUrl: "./expense-form.component.html",
    styleUrls: ["./expense-form.component.scss"],
})
export class ExpenseFormComponent {
    @Input() myExpenses: ExpenseItems = {
        id: 0,
        cost: 0.0,
        item: "",
        note: "",
        category_id: 0,
    };

    @Output() expenseEvent: EventEmitter<ExpenseItems> =
        new EventEmitter<ExpenseItems>();

    btnClicked = () => {
        console.log("Budget Added!");

        const o = { ...this.myExpenses };

        this.expenseEvent.emit(o);
    };
}
