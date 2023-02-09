import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categories } from "../models/categories";
import { ExpenseItems } from "../models/expense-item";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
    }),
};

@Injectable({
    providedIn: "root",
})
export class ExpenseService {
    baseUrl = "http://localhost:5000";
    private apiUrl = "http://localhost:5137/expense_items";
    private apiUrlCategories = "http://localhost:5137/categories";


    constructor(private http: HttpClient) {
        console.log("constructor");
    }

    getExpenses = (): Observable<ExpenseItems[]> => {
        return this.http.get<ExpenseItems[]>(this.apiUrl);
    };

    // getCateg = (): Observable<Categories[]> => {
    //     return this.http.get<Categories[]>(this.apiUrlCategories);
    // };

    computeTotalExpenses = (expenseItems: ExpenseItems[]): number => {
        let total = 0.0;

        expenseItems.forEach((expenseItem: ExpenseItems) => {
            total = total + expenseItem.cost;
        });

        return total;
    };

    getById = (id: number): Observable<ExpenseItems> => {
        let item: Observable<ExpenseItems>;

        item = this.http.get<ExpenseItems>(
            `${this.apiUrl}/${id}`,
            httpOptions
        );

        return item;
    };

    getCategory = (id: number): Observable<Categories> => {
        let item: Observable<Categories>;

        item = this.http.get<Categories>(
            `${this.apiUrlCategories}/${id}`,
            httpOptions
        );

        return item;
    };

    save = (expenseItem : ExpenseItems) : Observable<ExpenseItems> => {
        let item : Observable<ExpenseItems>
    
        if(expenseItem.id) {
          // Perform Update: PUT /expenses/:id
          const url = `${this.apiUrl}/${expenseItem.id}`
    
          item = this.http.put<ExpenseItems>(url, expenseItem, httpOptions)
        } else {
          // Perform Create: POST /expenses
          
          item = this.http.post<ExpenseItems>(this.apiUrl, expenseItem, httpOptions)
        }
    
        return item
      }
}
