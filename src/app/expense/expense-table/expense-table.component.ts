import { Component, Input } from "@angular/core";
import { ExpenseItem } from "../../models/expense-item";

@Component({
    selector: "app-expense-table",
    templateUrl: "./expense-table.component.html",
    styleUrls: ["./expense-table.component.scss"],
})
export class ExpenseTableComponent {
    @Input() expenses: ExpenseItem;
}
