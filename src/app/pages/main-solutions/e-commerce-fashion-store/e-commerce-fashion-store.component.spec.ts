import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceFashionStoreComponent } from './e-commerce-fashion-store.component';

describe('ECommerceFashionStoreComponent', () => {
  let component: ECommerceFashionStoreComponent;
  let fixture: ComponentFixture<ECommerceFashionStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceFashionStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceFashionStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
