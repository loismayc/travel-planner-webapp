import { Component, Output, EventEmitter } from "@angular/core";
import { Categories } from "../../models/categories";

@Component({
    selector: "app-category-select",
    templateUrl: "./category-select.component.html",
    styleUrls: ["./category-select.component.scss"],
})
export class CategorySelectComponent {
    @Output() categorySelectedEvent: EventEmitter<any> =
        new EventEmitter<any>();

    categories: Categories[] = [
        {
            id: 1,
            categoryName: "Transportation",
        },
        {
            id: 2,
            categoryName: "Accomodation",
        },
        {
            id: 3,
            categoryName: "Food",
        },
        {
            id: 4,
            categoryName: "Activities",
        },
        {
            id: 5,
            categoryName: "Miscellaneous",
        },
    ];

    selectHandler = (payload: any) => {
        const category_id = payload.target.value;
        this.categorySelectedEvent.emit({ id: category_id });
    };
}
