import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ExpenseItems } from "../../models/expense-item";
import { ExpenseService } from "../../services/expense.service";

@Component({
    selector: "app-expense-items",
    templateUrl: "./expense-items.component.html",
    styleUrls: ["./expense-items.component.scss"],
})
export class ExpenseItemsComponent implements OnInit {
    id: number;

    expenses: ExpenseItems[] = [];
    expenseItem: ExpenseItems;



    totalExpenses = 0.0;
    categoryId: number;

    setCategoryId = (payload: any) => {
        this.categoryId = payload.id;
    };

    
    constructor( private route : ActivatedRoute, private totalExpenseService: ExpenseService) {}

    handleExpense = (payload: ExpenseItems) => {
        console.log(payload);
        payload.category_id = this.categoryId;
        this.expenses.push(payload);

        this.totalExpenses = this.totalExpenseService.computeTotalExpenses(
            this.expenses
        );
    };

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'))
        console.log(`ShowComponent for id ${this.id}`)
    
        this.totalExpenseService.getById(this.id).subscribe((item) => {
          this.expenseItem = item
        })
      }

}
