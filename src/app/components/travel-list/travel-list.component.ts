import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TripsService } from "src/app/services/trips.service";
import { DestinationItems } from "../../models/destination-items";
import { TravelItemModalComponent } from "../travel-item-modal/travel-item-modal.component";

@Component({
    selector: "app-travel-list",
    templateUrl: "./travel-list.component.html",
    styleUrls: ["./travel-list.component.scss"],
})
export class TravelListComponent implements OnInit{
    closeResult: string;
    @Input() myDestination: DestinationItems;

    @Output() deleteEvent: EventEmitter<DestinationItems> =
    new EventEmitter<DestinationItems>();
    constructor(
      
        private tripService: TripsService,private modalService: NgbModal
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
    
    
  open() {
    this.modalService.open(TravelItemModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
