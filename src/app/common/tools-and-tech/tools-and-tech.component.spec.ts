import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAndTechComponent } from './tools-and-tech.component';

describe('ToolsAndTechComponent', () => {
  let component: ToolsAndTechComponent;
  let fixture: ComponentFixture<ToolsAndTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsAndTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsAndTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
