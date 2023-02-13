import { Component } from "@angular/core";
import { ExpenseItems } from "./models/expense-item";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "budget-log-webapp";
}
