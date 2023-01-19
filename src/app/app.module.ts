import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ExpenseItemsComponent } from "./components/expense-items/expense-items.component";
import { ExpenseTableComponent } from "./components/expense-table/expense-table.component";
import { BudgetTableComponent } from "./components/budget-table/budget-table.component";
import { BudgetItemsComponent } from "./components/budget-items/budget-items.component";
import { BudgetFormComponent } from "./components/budget-form/budget-form.component";
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ExpenseItemsComponent,
        BudgetItemsComponent,
        BudgetTableComponent,
        ExpenseTableComponent,
        BudgetFormComponent,
        HeaderComponent,
        FooterComponent,
        ExpenseFormComponent,
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
