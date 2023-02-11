import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ExpenseService } from "src/app/services/expense.service";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-form",
    templateUrl: "./expense-form.component.html",
    styleUrls: ["./expense-form.component.scss"],
})
export class ExpenseFormComponent{

    constructor(
        private expenseItemsService : ExpenseService
      ) {
      }
    @Input() myExpense: ExpenseItems = {
        cost: 0,
        name: "",
        note: "",
        travelItemId: 0,
        categoryId: 0,
    };

    @Output() expenseEvent: EventEmitter<ExpenseItems> = new EventEmitter<ExpenseItems>();

    addButton = () => {
        const e = { ...this.myExpense };
    
        this.expenseItemsService.save(e).subscribe((savedExpenseItem) => {
            console.log(savedExpenseItem)
       
            this.expenseEvent.emit(savedExpenseItem)
          })
          // this.expenseItemsService.getById(this.myExpense.travelItemId).subscribe((item) => {
          //   this.myExpense = item
          // })
          console.log("Expense added!");
        };

}

