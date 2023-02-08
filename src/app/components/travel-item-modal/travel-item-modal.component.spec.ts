import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelItemModalComponent } from './travel-item-modal.component';

describe('TravelItemModalComponent', () => {
  let component: TravelItemModalComponent;
  let fixture: ComponentFixture<TravelItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
