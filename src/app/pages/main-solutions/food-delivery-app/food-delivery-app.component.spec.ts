import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDeliveryAppComponent } from './food-delivery-app.component';

describe('FoodDeliveryAppComponent', () => {
  let component: FoodDeliveryAppComponent;
  let fixture: ComponentFixture<FoodDeliveryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDeliveryAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDeliveryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
