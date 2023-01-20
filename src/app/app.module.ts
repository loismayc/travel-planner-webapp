import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
//import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { ExpenseItemsComponent } from "./components/expense-items/expense-items.component";
import { ExpenseTableComponent } from "./components/expense-table/expense-table.component";
import { ExpenseFormComponent } from "./components/expense-form/expense-form.component";
import { TravelFormComponent } from "./components/travel-form/travel-form.component";
import { HeaderComponent } from "./components/sections/header/header.component";
import { FooterComponent } from "./components/sections/footer/footer.component";
import { TravelListComponent } from "./components/travel-list/travel-list.component";
import { TravelOverviewComponent } from "./components/travel-overview/travel-overview.component";
import { CategorySelectComponent } from "./components/category-select/category-select.component";

@NgModule({
    declarations: [
        AppComponent,
        ExpenseItemsComponent,
        ExpenseTableComponent,
        HeaderComponent,
        FooterComponent,
        ExpenseFormComponent,
        TravelFormComponent,
        TravelListComponent,
        TravelOverviewComponent,
        CategorySelectComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        // RouterModule.forRoot([
        //      { path: "expense-items", component: ExpenseItemsComponent },
        //   ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
