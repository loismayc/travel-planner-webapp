import { Component } from "@angular/core";
//import { BudgetItems } from "./models/budget-input";
import { BudgetItems } from "./models/budget-items";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "budget-log-webapp";

    myBudget: BudgetItems[] = [];

    formEventHandler = (payload: BudgetItems) => {
        console.log("Handling event handler");
        console.log(payload);

        this.myBudget.push(payload);
    };
}
