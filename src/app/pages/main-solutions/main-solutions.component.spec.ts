import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSolutionsComponent } from './main-solutions.component';

describe('MainSolutionsComponent', () => {
  let component: MainSolutionsComponent;
  let fixture: ComponentFixture<MainSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
