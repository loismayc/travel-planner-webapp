import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ExpenseItems } from "src/app/models/expense-item";
import { ExpenseService } from "src/app/services/expense.service";
import { TripsService } from "src/app/services/trips.service";
import { DestinationItems } from "../../models/destination-items";

@Component({
    selector: "app-travel-list",
    templateUrl: "./travel-list.component.html",
    styleUrls: ["./travel-list.component.scss"],
})
export class TravelListComponent implements OnInit{
    destinationExpenses: { [id: string]: number } = {};
    
    destinations: DestinationItems[]= [];
    expense: ExpenseItems;
    totalExpense = 0.0
    id: number;

    @Input() trips: DestinationItems;
    @Input() expenses: ExpenseItems[];

    @Output() deleteEvent: EventEmitter<DestinationItems> =
    new EventEmitter<DestinationItems>();
 
    constructor(
        private tripService: TripsService,
        private expenseService: ExpenseService
        ) {}

    ngOnInit(): void {
        this.tripService.getTrips().subscribe((destinations) => {
            this.destinations = destinations;
            console.log("destinations", this.destinations);

            this.destinations.forEach((destination: DestinationItems) => {
                this.expenseService.getExpenses().subscribe((expenses) => {
                    // Filter expenses for the current destination
                    let filteredExpenses = expenses.filter((expense) => expense.travelItemId === destination.id);
                    // Calculate total expenses for the current destination
                    let totalExpense = this.expenseService.computeTotalExpenses(filteredExpenses);
                      this.destinationExpenses[destination.id] = totalExpense;
                });
            });
        });  
    }
   
    deleteItem = (trip: DestinationItems) => {
        let t = {...trip};

        this.tripService.delete(t).subscribe((savedItem) => {
            this.deleteEvent.emit(savedItem);
        })
    
        console.log("Item deleted");
    }
    
}
