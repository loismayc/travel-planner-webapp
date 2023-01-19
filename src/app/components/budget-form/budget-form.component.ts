import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BudgetItems } from "../../models/budget-items";

@Component({
    selector: "app-budget-form",
    templateUrl: "./budget-form.component.html",
    styleUrls: ["./budget-form.component.scss"],
})
export class BudgetFormComponent {
    @Input() myBudget: BudgetItems = {
        id: 0,
        amount: 0.0,
        category: "",
    };

    @Output() budgetEvent: EventEmitter<BudgetItems> =
        new EventEmitter<BudgetItems>();

    btnClicked = () => {
        console.log("Budget Added!");

        const o = { ...this.myBudget };

        this.budgetEvent.emit(o);
    };
}
