import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DestinationItems } from "../../models/destination-items";

@Component({
    selector: "app-travel-form",
    templateUrl: "./travel-form.component.html",
    styleUrls: ["./travel-form.component.scss"],
})
export class TravelFormComponent {
    @Input() myDestination: DestinationItems = {
        id: 0,
        start_date: "",
        end_date: "",
        days: 0,
        budget: 0,
        expense: 0,
        fund: 0,
    };

    @Output() destinationEvent: EventEmitter<DestinationItems> =
        new EventEmitter<DestinationItems>();

    addDestination = () => {
        console.log("Destination added!");

        const e = { ...this.myDestination };
        this.destinationEvent.emit(e);
    };
}
