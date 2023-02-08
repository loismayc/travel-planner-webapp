import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TripsService } from "src/app/services/trips.service";
import { DestinationItems } from "../../models/destination-items";

@Component({
    selector: "app-travel-list",
    templateUrl: "./travel-list.component.html",
    styleUrls: ["./travel-list.component.scss"],
})
export class TravelListComponent implements OnInit{
    @Input() myDestination: DestinationItems;

    @Output() deleteEvent: EventEmitter<DestinationItems> =
    new EventEmitter<DestinationItems>();
    constructor(
      
        private tripService: TripsService,
        ) {}

    ngOnInit(): void {

    }

    deleteItem = (trip: DestinationItems) => {
        let t = {...trip};

        console.log(t);
        this.tripService.delete(t).subscribe((savedItem) => {
            this.deleteEvent.emit(savedItem);
        })
        console.log("Item deleted");
    }
    
    updateItem = (trip: DestinationItems) => {
        let t = {...trip};

        console.log(t);
        this.tripService.delete(t).subscribe((savedItem) => {
            this.deleteEvent.emit(savedItem);
        })
        console.log("Item deleted");
    }

}
