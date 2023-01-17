import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ExpenseItemsComponent } from "./expense-items/expense-items.component";
import { HeaderComponent } from "./sections/header/header.component";
import { BudgetItemsComponent } from "./budget/budget-items/budget-items.component";
import { FooterComponent } from "./sections/footer/footer.component";
import { BudgetTableComponent } from "./budget/budget-table/budget-table.component";

@NgModule({
    declarations: [
        AppComponent,
        ExpenseItemsComponent,
        HeaderComponent,
        BudgetItemsComponent,
        FooterComponent,
        BudgetTableComponent,
    ],
    imports: [
        BrowserModule,
        // RouterModule.forRoot([
        //      { path: "expense-items", component: ExpenseItemsComponent },
        //   ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
