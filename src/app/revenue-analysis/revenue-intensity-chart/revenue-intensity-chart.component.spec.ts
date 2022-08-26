import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueIntensityChartComponent } from './revenue-intensity-chart.component';

describe('RevenueIntensityChartComponent', () => {
  let component: RevenueIntensityChartComponent;
  let fixture: ComponentFixture<RevenueIntensityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueIntensityChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueIntensityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
