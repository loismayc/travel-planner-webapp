import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Categories } from "src/app/models/categories";
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
    category: Categories;


    totalExpenses = 0.0;
    categoryId: number;

    setCategoryId = (payload: any) => {
        this.categoryId = payload.id;
    };

    
    constructor( private route : ActivatedRoute, private expenseService: ExpenseService) {}

    handleExpense = (payload: ExpenseItems) => {
        console.log(payload);
       // payload.categoryId = this.categoryId;
        this.expenses.push(payload);

        this.totalExpenses = this.expenseService.computeTotalExpenses(
            this.expenses
        );
    };

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'))
        console.log(`ShowComponent for id ${this.id}`)
    
        this.expenseService.getById(this.id).subscribe((item) => {
          this.expenseItem = item
        })

        this.expenseService.getExpenses().subscribe((expenses) => {
            this.expenses = expenses;
            console.log(expenses);
        });

        // this.expenseService.getCateg().subscribe((categ) => {
        //     this.category = categ;
        //     console.log(categ);
        // });

        this.expenseService.getCategory(this.id).subscribe((category) => {
            this.category = category
            console.log(category.id);

          })

      }


      

}
