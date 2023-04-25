import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToExpertsComponent } from './talk-to-experts.component';

describe('TalkToExpertsComponent', () => {
  let component: TalkToExpertsComponent;
  let fixture: ComponentFixture<TalkToExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkToExpertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
