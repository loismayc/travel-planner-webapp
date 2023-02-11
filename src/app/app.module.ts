import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { TravelItemModalComponent } from './components/travel-item-modal/travel-item-modal.component';

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
        TravelItemModalComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        RouterModule.forRoot([
            { path: '', component: TravelOverviewComponent },
            { path: "travel-items/:id", component: ExpenseItemsComponent },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
