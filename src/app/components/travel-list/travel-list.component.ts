import { Component, Input } from "@angular/core";
import { DestinationItems } from "../../models/destination-items";

@Component({
    selector: "app-travel-list",
    templateUrl: "./travel-list.component.html",
    styleUrls: ["./travel-list.component.scss"],
})
export class TravelListComponent {
    @Input() destination: DestinationItems;
}
