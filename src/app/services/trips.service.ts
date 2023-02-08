import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DestinationItems } from "../models/destination-items";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
    }),
};

@Injectable({
    providedIn: "root",
})
export class TripsService {
    baseUrl = "http://localhost:5000";
    private apiUrl = "http://localhost:5137/travel_items";

    constructor(private http: HttpClient) {}

    // getTrips = (): Observable<DestinationItems[]> => {
    //     let items: Observable<DestinationItems[]>;

    //     items = this.http.get<DestinationItems[]>(
    //         `${this.baseUrl}/destination`,
    //         httpOptions
    //     );

    //     return items;
    // };

    
    getTrips = (): Observable<DestinationItems[]> => {
        return this.http.get<DestinationItems[]>(this.apiUrl);
    };

  
}
