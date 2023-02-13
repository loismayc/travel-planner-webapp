import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DestinationItems } from "src/app/models/destination-items";
import { TripsService } from "src/app/services/trips.service";
import { Location } from "@angular/common";

@Component({
    selector: "app-edit-travel-item",
    templateUrl: "./edit-travel-item.component.html",
    styleUrls: ["./edit-travel-item.component.scss"],
})
export class EditTravelItemComponent implements OnInit {
    id: number;
    trips: DestinationItems;
    isLoading = true;
    isSuccessful = false;
    showAlert = false;

    constructor(
        private route: ActivatedRoute,
        private tripService: TripsService,
        private location: Location
    ) {}
    @Output() updateItemEvent: EventEmitter<DestinationItems> =
        new EventEmitter<DestinationItems>();

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get("id"));

        this.tripService.getById(this.id).subscribe((item) => {
            this.trips = item;
            this.isLoading = false;
        });
    }

    updateItem = (item: DestinationItems) => {
        this.tripService.save(item).subscribe((savedTravelItem) => {
            this.updateItemEvent.emit(savedTravelItem);
            this.isSuccessful = true;
            this.showAlert = true;

            setTimeout(() => {
                this.showAlert = false;
              }, 3000);

            console.log("Update successful");
            this.ngOnInit();
        },
        (error) => {
          this.isSuccessful = false;
          this.showAlert = true;

          setTimeout(() => {
            this.showAlert = false;
          }, 3000);

          console.error("Update failed:", error);
    
        });
      
        // this.location.back();
    };

    goBack() {
        this.location.back();
    }
}
