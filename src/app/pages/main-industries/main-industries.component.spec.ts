import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIndustriesComponent } from './main-industries.component';

describe('MainIndustriesComponent', () => {
  let component: MainIndustriesComponent;
  let fixture: ComponentFixture<MainIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainIndustriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
