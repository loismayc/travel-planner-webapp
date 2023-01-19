import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExpenseItemsComponent } from "./expense-items.component";

describe("ExpenseItemsComponent", () => {
    let component: ExpenseItemsComponent;
    let fixture: ComponentFixture<ExpenseItemsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpenseItemsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ExpenseItemsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
