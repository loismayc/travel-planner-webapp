import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationItems } from 'src/app/models/destination-items';
import { TripsService } from 'src/app/services/trips.service';


@Component({
  selector: 'app-travel-item-modal',
  templateUrl: './travel-item-modal.component.html',
  styleUrls: ['./travel-item-modal.component.scss']
})
export class TravelItemModalComponent {
  id: number;

 @Input() destination: DestinationItems;

 
}

