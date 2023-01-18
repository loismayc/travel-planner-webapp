import { Component } from "@angular/core";
import { Budget } from "./models/budget-input";
//import { ExpenseItem } from "./models/expense-item";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "budget-log-webapp";

    formEventHandler = () => {
        console.log("Handling event handler");
        console.log();
    };
}
