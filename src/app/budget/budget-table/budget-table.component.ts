import { Component, Input } from "@angular/core";
import { BudgetItems } from "../../models/budget-items";

@Component({
    selector: "app-budget-table",
    templateUrl: "./budget-table.component.html",
    styleUrls: ["./budget-table.component.scss"],
})
export class BudgetTableComponent {
    @Input() budget: BudgetItems;
}
