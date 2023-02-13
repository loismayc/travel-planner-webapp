import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Categories } from "src/app/models/categories";
import { CategoryService } from "src/app/services/category.service";
import { ExpenseService } from "src/app/services/expense.service";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-table",
    templateUrl: "./expense-table.component.html",
    styleUrls: ["./expense-table.component.scss"],
})
export class ExpenseTableComponent implements OnInit{

    categories: Categories[] = [];
    isEditable: boolean;
  selectedCategoryId: number;
  id: number;
  
    @Input() expense: ExpenseItems;
    @Output() deleteEvent: EventEmitter<ExpenseItems> = new EventEmitter<ExpenseItems>();
  
    totalExpenses: number;


    getCategoryName(categoryId: number) {
        return this.categories.find(category => category.id === categoryId)?.categoryName;
      }
    
         setCategoryId = (payload: any) => {
        this.selectedCategoryId = payload.id;
    };


      constructor(
        private categoryService: CategoryService, private expenseItemsService: ExpenseService, private route : ActivatedRoute
        ) {
            
        }

        ngOnInit(): void {
         
            this.categoryService.getAll().subscribe(categories => {
                this.categories = categories;
              });
          }
    
          
    deleteItem = (trip: ExpenseItems) => {
        let t = {...trip};

        this.expenseItemsService.delete(t).subscribe((deleted) => {
            this.deleteEvent.emit(deleted);
        })
    
        console.log("Item deleted");
        
    }

}
