import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalWalletAppComponent } from './digital-wallet-app.component';

describe('DigitalWalletAppComponent', () => {
  let component: DigitalWalletAppComponent;
  let fixture: ComponentFixture<DigitalWalletAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalWalletAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalWalletAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
