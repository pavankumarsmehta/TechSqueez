import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDevelopersComponent } from './main-developers.component';

describe('MainDevelopersComponent', () => {
  let component: MainDevelopersComponent;
  let fixture: ComponentFixture<MainDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDevelopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
