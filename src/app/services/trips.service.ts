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
    private apiUrl = "http://localhost:5137/travel_items";
    private url =  "http://localhost:5137";

    constructor(private http: HttpClient) {}

    getTrips = (): Observable<DestinationItems[]> => {
        return this.http.get<DestinationItems[]>(this.apiUrl);
    };

    getById = (id: number): Observable<DestinationItems> => {
        let item: Observable<DestinationItems>;

        item = this.http.get<DestinationItems>(
            `${this.apiUrl}/${id}`,
            httpOptions
        );

        return item;
    };

    save = (travelItem : DestinationItems) : Observable<DestinationItems> => {
        let item : Observable<DestinationItems>
        // create item
        if (!travelItem.id){
            item  = this.http.post<DestinationItems>(this.apiUrl,travelItem, httpOptions)
        } else {
        //update item
            const url = `${this.apiUrl}/${travelItem.id}`;
            item = this.http.put<DestinationItems>(url, travelItem, httpOptions)
    }
        return item
 }

    delete(travelItem : DestinationItems) : Observable<DestinationItems> {
        const url = `${this.apiUrl}/${travelItem.id}`;
        return this.http.delete<DestinationItems>(url);
    }

    computeDays = (days: DestinationItems[]): number => {
        let total = 0;
        
         days.forEach((day: DestinationItems) => {
            let start = new Date(day.startDate);
            let end = new Date(day.endDate);
            let diffTime = Math.abs(end.getTime() - start.getTime());
            total = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        });

        return total;
    }

  
}
