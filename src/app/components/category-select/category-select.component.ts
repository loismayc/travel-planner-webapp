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
            title: "Transportation",
        },
        {
            id: 2,
            title: "Accomodation",
        },
        {
            id: 3,
            title: "Food",
        },
        {
            id: 4,
            title: "Activities",
        },
        {
            id: 5,
            title: "Miscellaneous",
        },
    ];

    selectHandler = (payload: any) => {
        const category_id = payload.target.value;
        this.categorySelectedEvent.emit({ id: category_id });
    };
}
