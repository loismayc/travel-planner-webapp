import { Component, Input } from "@angular/core";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-table",
    templateUrl: "./expense-table.component.html",
    styleUrls: ["./expense-table.component.scss"],
})
export class ExpenseTableComponent {
    @Input() expense: ExpenseItems;
}
