import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Categories } from "src/app/models/categories";
import { CategoryService } from "src/app/services/category.service";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-table",
    templateUrl: "./expense-table.component.html",
    styleUrls: ["./expense-table.component.scss"],
})
export class ExpenseTableComponent implements OnInit{

    categories: Categories[] = [];

   
    @Input() expense: ExpenseItems;

    getCategoryName(categoryId: number) {
        return this.categories.find(category => category.id === categoryId)?.categoryName;
      }

      constructor(
        private categoryService: CategoryService
        ) {}

        ngOnInit(): void {
         
            this.categoryService.getAll().subscribe(categories => {
                this.categories = categories;
              });
    
          }
 
}
