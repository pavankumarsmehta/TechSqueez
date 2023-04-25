import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningAppComponent } from './e-learning-app.component';

describe('ELearningAppComponent', () => {
  let component: ELearningAppComponent;
  let fixture: ComponentFixture<ELearningAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELearningAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELearningAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
