import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Categories } from "src/app/models/categories";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-table",
    templateUrl: "./expense-table.component.html",
    styleUrls: ["./expense-table.component.scss"],
})
export class ExpenseTableComponent{
   
    @Input() expense: ExpenseItems;
    @Input() category: Categories;



}
