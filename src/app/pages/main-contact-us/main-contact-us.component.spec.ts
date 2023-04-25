import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactUsComponent } from './main-contact-us.component';

describe('MainContactUsComponent', () => {
  let component: MainContactUsComponent;
  let fixture: ComponentFixture<MainContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
