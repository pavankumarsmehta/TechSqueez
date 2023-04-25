import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPlateformComponent } from './other-plateform.component';

describe('OtherPlateformComponent', () => {
  let component: OtherPlateformComponent;
  let fixture: ComponentFixture<OtherPlateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherPlateformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherPlateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
