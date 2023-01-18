import { Component, Input, Output, EventEmitter } from "@angular/core";
//import { Budget } from "../../models/budget-input";
import { BudgetItems } from "../../models/budget-items";

@Component({
    selector: "app-budget-items",
    templateUrl: "./budget-items.component.html",
    styleUrls: ["./budget-items.component.scss"],
})
export class BudgetItemsComponent {
    @Input() myBudget: BudgetItems = {
        id: 0,

        amount: 0.0,
        category: "",
    };
    /*      {
            id: 2,
            amount: 5000.0,
            category: "Bills",
        },
        {
            id: 3,
            amount: 2000.0,
            category: "Health",
        },
        {
            id: 4,
            amount: 500.0,
            category: "Concert",
      },
        */

    totalBudget = 200000;
    totalExpense = 150000;
    remaining = 50000;

    /*   @Input() budgetItem: Budget = {
        category: "",
        amount: 0.0,
    };*/

    @Output() budgetEvent: EventEmitter<BudgetItems> =
        new EventEmitter<BudgetItems>();

    btnClicked = () => {
        console.log("Button clicked!");

        const o = { ...this.myBudget };
        // console.log("budget-item-component");

        this.budgetEvent.emit(o);
    };
}
