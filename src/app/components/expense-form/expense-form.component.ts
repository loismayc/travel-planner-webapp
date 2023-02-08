import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ExpenseService } from "src/app/services/expense.service";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-form",
    templateUrl: "./expense-form.component.html",
    styleUrls: ["./expense-form.component.scss"],
})
export class ExpenseFormComponent {

    constructor(
        private expenseItemsService : ExpenseService
      ) {
      }
    @Input() myExpense: ExpenseItems = {
        id: 0,
        cost: 0,
        name: "",
        note: "",
        destination_id: 0,
        category_id: 0,
    };

    @Output() expenseEvent: EventEmitter<ExpenseItems> =
        new EventEmitter<ExpenseItems>();

    addButton = () => {
        console.log("Expense added!");

        const e = { ...this.myExpense };
    
        this.expenseItemsService.save(e).subscribe((savedExpenseItem) => {
            console.log(savedExpenseItem)
            this.expenseEvent.emit(savedExpenseItem)
          })
        };
}

