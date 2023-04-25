import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceAppSolutionsComponent } from './marketplace-app-solutions.component';

describe('MarketplaceAppSolutionsComponent', () => {
  let component: MarketplaceAppSolutionsComponent;
  let fixture: ComponentFixture<MarketplaceAppSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceAppSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplaceAppSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
