import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ExpenseItems } from "../../models/expense-item";
import { ExpenseService } from "../../services/expense.service";
import {Location} from '@angular/common';

@Component({
    selector: "app-expense-items",
    templateUrl: "./expense-items.component.html",
    styleUrls: ["./expense-items.component.scss"],
})
export class ExpenseItemsComponent implements OnInit {
   // id: number;
    expenses: ExpenseItems[] = [];
    expenseItem: ExpenseItems;
    totalExpenses = 0.0;

    @Input() id: number;

    @Output() expenseEvent = new EventEmitter<number>();

    constructor( private route : ActivatedRoute, 
        private expenseService: ExpenseService,
        private location: Location
        ) {}

 
    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'))
   
        this.expenseService.getExpenses().subscribe((expenses) => {
            this.expenses = expenses.filter(e => e.travelItemId === this.id);
            console.log("Expenses for travel id " + this.id, this.expenses);
            this.totalExpenses = this.expenseService.computeTotalExpenses(
            this.expenses
            );
        });    
        this.expenseEvent.emit(this.totalExpenses);

      }

      getExpenseItems = (payload: ExpenseItems) => {
        this.ngOnInit();
    }

    goBack() {
        this.location.back();
      }

}
