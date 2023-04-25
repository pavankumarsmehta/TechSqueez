import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendServicesComponent } from './backend-services.component';

describe('BackendServicesComponent', () => {
  let component: BackendServicesComponent;
  let fixture: ComponentFixture<BackendServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
