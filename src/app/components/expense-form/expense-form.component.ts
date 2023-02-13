import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ExpenseService } from "src/app/services/expense.service";
import { ExpenseItems } from "../../models/expense-item";

@Component({
    selector: "app-expense-form",
    templateUrl: "./expense-form.component.html",
    styleUrls: ["./expense-form.component.scss"],
})
export class ExpenseFormComponent implements OnInit {
    id: number;
    selectedTravelItemId: number;
    selectedCategoryId: number;
    expenseItems: ExpenseItems[] = [];
    isSuccessful = false;
    showAlert = false;

    constructor(
        private expenseItemsService: ExpenseService,
        private route: ActivatedRoute
    ) {}
    @Input() myExpense: ExpenseItems = {
        cost: 0,
        name: "",
        note: "",
        travelItemId: 0,
        categoryId: 0,
    };

    @Output() expenseEvent: EventEmitter<ExpenseItems> =
        new EventEmitter<ExpenseItems>();

    categoryId: number;

    ngOnInit(): void {}
    setCategoryId = (payload: any) => {
        this.selectedCategoryId = payload.id;
    };

    addButton = () => {
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        const e = { ...this.myExpense };
        e.travelItemId = this.id;
        e.categoryId = this.selectedCategoryId;

        this.expenseItemsService.save(e).subscribe((savedExpenseItem) => {
            console.log(savedExpenseItem);
            this.expenseEvent.emit(savedExpenseItem);
            this.isSuccessful = true;
            this.showAlert = true;

            setTimeout(() => {
                this.showAlert = false;
              }, 3000);
        },
        (error) => {
          this.isSuccessful = false;
          this.showAlert = true;

          setTimeout(() => {
            this.showAlert = false;
          }, 3000);

          console.error("Update failed:", error);
    
        });
    };
}
