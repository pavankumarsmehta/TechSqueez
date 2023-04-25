import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMSServicesComponent } from './cms-services.component';

describe('CMSServicesComponent', () => {
  let component: CMSServicesComponent;
  let fixture: ComponentFixture<CMSServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMSServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMSServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
