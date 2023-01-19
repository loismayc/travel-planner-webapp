import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOverviewComponent } from './travel-overview.component';

describe('TravelOverviewComponent', () => {
  let component: TravelOverviewComponent;
  let fixture: ComponentFixture<TravelOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
