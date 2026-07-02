import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuiChartsComponent } from './aui-charts.component';

describe('AuiChartsComponent', () => {
  let component: AuiChartsComponent;
  let fixture: ComponentFixture<AuiChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuiChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuiChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
