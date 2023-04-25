import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareerComponent } from './main-career.component';

describe('MainCareerComponent', () => {
  let component: MainCareerComponent;
  let fixture: ComponentFixture<MainCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
