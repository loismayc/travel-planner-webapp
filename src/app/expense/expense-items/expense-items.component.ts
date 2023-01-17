import { Component } from "@angular/core";
import { Categories } from "../../models/categories";
import { ExpenseItem } from "../../models/expense-item";

@Component({
    selector: "app-expense-items",
    templateUrl: "./expense-items.component.html",
    styleUrls: ["./expense-items.component.scss"],
})
export class ExpenseItemsComponent {
    myExpenses: ExpenseItem[] = [
        {
            id: 1,
            cost: 3500.0,
            name: "Accomodation",
            note: "including service fee",
            category_id: 1,
        },
        {
            id: 2,
            cost: 6000.0,
            name: "Plane ticket",
            note: "Roundtrip fare",
            category_id: 1,
        },

        {
            id: 3,
            cost: 8000.0,
            name: "Food",
            note: "for one week",
            category_id: 1,
        },

        {
            id: 3,
            cost: 8000.0,
            name: "Electric Bill",
            note: "for January",
            category_id: 1,
        },

        {
            id: 3,
            cost: 15000.0,
            name: "VIP Ticket",
            note: "with service fee",
            category_id: 1,
        },
    ];

    categories: Categories[] = [
        {
            id: 1,
            title: "Travel",
        },
        {
            id: 2,
            title: "Bills",
        },
        {
            id: 3,
            title: "Health",
        },
        {
            id: 4,
            title: "Concert",
        },
    ];
}
