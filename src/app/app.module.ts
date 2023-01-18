import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ExpenseItemsComponent } from "./expense/expense-items/expense-items.component";
import { HeaderComponent } from "./sections/header/header.component";
import { BudgetItemsComponent } from "./budget/budget-items/budget-items.component";
import { FooterComponent } from "./sections/footer/footer.component";
import { BudgetTableComponent } from "./budget/budget-table/budget-table.component";
import { ExpenseTableComponent } from "./expense/expense-table/expense-table.component";
import { FormsModule } from "@angular/forms";
import { BudgetFormComponent } from './budget/budget-form/budget-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ExpenseItemsComponent,
        HeaderComponent,
        BudgetItemsComponent,
        FooterComponent,
        BudgetTableComponent,
        ExpenseTableComponent,
        BudgetFormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // RouterModule.forRoot([
        //      { path: "expense-items", component: ExpenseItemsComponent },
        //   ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
