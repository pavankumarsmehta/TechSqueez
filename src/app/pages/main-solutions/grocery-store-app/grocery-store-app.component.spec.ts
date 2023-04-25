import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryStoreAppComponent } from './grocery-store-app.component';

describe('GroceryStoreAppComponent', () => {
  let component: GroceryStoreAppComponent;
  let fixture: ComponentFixture<GroceryStoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryStoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryStoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
