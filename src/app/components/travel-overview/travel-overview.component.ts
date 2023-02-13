import { Component, Input, OnInit } from "@angular/core";
import { ExpenseItems } from "src/app/models/expense-item";
import { ExpenseService } from "src/app/services/expense.service";
import { DestinationItems } from "../../models/destination-items";
import { BudgetService } from "../../services/budget.service";
import { TripsService } from "../../services/trips.service";

@Component({
    selector: "app-travel-overview",
    templateUrl: "./travel-overview.component.html",
    styleUrls: ["./travel-overview.component.scss"],
})
export class TravelOverviewComponent implements OnInit {
    id: number;
    destinationExpenses: { [id: string]: number } = {};
    destinations: DestinationItems[] = [];
    expenses: ExpenseItems[]=[];
    totalBudget = 0.0;
    totalExpense = 0.0;
 
    constructor(
        private totalBudgetService: BudgetService,
        private tripService: TripsService,
        private expenseService: ExpenseService
    ) {}

    ngOnInit(): void {
        console.log("ngOnInit() fired");

        this.tripService.getTrips().subscribe((destinations) => {
            this.destinations = destinations;
            console.log("destinations", this.destinations);

            this.destinations.forEach((destination) => {
                destination.days = this.tripService.computeDays([destination]);
              });
            
              this.totalBudget = this.totalBudgetService.computeTotalBudget(
                this.destinations
            );
        });      
        this.expenseService.getExpenses().subscribe((expenses) => {  
            this.expenses = expenses
            console.log("expenses",expenses);    
            this.totalExpense = this.expenseService.computeTotalExpenses(
                this.expenses
            )});
        
    }

    handleDestination = (payload: DestinationItems) => {
        console.log(payload);
        this.ngOnInit();
    };

    get totalRows(): number {
        return this.destinations.length;
      }
   
}

