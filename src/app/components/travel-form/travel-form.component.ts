import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { TripsService } from "src/app/services/trips.service";
import { DestinationItems } from "../../models/destination-items";

@Component({
    selector: "app-travel-form",
    templateUrl: "./travel-form.component.html",
    styleUrls: ["./travel-form.component.scss"],
})
export class TravelFormComponent implements OnInit {
    isSuccessful = false;
    showAlert = false;

    @Input() myDestination: DestinationItems = {
        id: 0,
        destination: "",
        startDate: "",
        endDate: "",
        days: 0,
        budget: 0,
        expenses: 0,
    };

    @Output() addDestinationEvent: EventEmitter<DestinationItems> =
        new EventEmitter<DestinationItems>();

    constructor(private tripsService: TripsService) {}
    ngOnInit(): void {}

    addDestination = () => {
        const e = { ...this.myDestination };
        this.tripsService.save(e).subscribe((savedTravelItem) => {
            this.addDestinationEvent.emit(savedTravelItem);
            console.log("Trip added!");
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
