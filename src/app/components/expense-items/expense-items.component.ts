import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Categories } from "src/app/models/categories";
import { CategoryService } from "src/app/services/category.service";
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
    categories: Categories[] = [];

    expenseItem: ExpenseItems;

    totalExpenses = 0.0;
    categoryId: number;

    setCategoryId = (payload: any) => {
        this.categoryId = payload.id;
    };

    getCategoryName(categoryId: number) {
        return this.categories.find(category => category.id === categoryId)?.categoryName;
      }

    
    constructor( private route : ActivatedRoute, 
        private expenseService: ExpenseService,
        private categoryService: CategoryService
        ) {}

 
    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'))
        console.log(`ShowComponent for travel id ${this.id}`)

        this.expenseService.getExpenses().subscribe((expenses) => {
            this.expenses = expenses.filter(e => e.travelItemId === this.id);
            console.log("Expenses for travel id " + this.id, this.expenses);
            this.totalExpenses = this.expenseService.computeTotalExpenses(
            this.expenses
            );
        });

        this.categoryService.getAll().subscribe(categories => {
            this.categories = categories;
          });

      }


      

}
