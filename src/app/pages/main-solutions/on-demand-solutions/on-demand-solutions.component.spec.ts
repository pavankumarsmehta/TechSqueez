import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandSolutionsComponent } from './on-demand-solutions.component';

describe('OnDemandSolutionsComponent', () => {
  let component: OnDemandSolutionsComponent;
  let fixture: ComponentFixture<OnDemandSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDemandSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDemandSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
