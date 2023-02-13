import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelItemComponent } from './edit-travel-item.component';

describe('EditTravelItemComponent', () => {
  let component: EditTravelItemComponent;
  let fixture: ComponentFixture<EditTravelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTravelItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTravelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
