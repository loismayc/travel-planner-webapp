import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { ExpenseItems } from "src/app/models/expense-item";
import { CategoryService } from "src/app/services/category.service";
import { Categories } from "../../models/categories";

@Component({
    selector: "app-category-select",
    templateUrl: "./category-select.component.html",
    styleUrls: ["./category-select.component.scss"],
})
export class CategorySelectComponent implements OnInit{
    @Output() categorySelectedEvent: EventEmitter<any> =
        new EventEmitter<any>();

    expense: ExpenseItems;

    categories: Categories[] = [];

    constructor( 
        
        private categoryService: CategoryService
        ) {}

    selectHandler = (payload: any) => {
        const category_id = payload.target.value;
        this.categorySelectedEvent.emit({ id: category_id });
    };

    ngOnInit(): void {
        this.categoryService.getAll().subscribe((category) => {
            this.categories = category;
            console.log("All Categories" , category);
   
        });
    }
}
