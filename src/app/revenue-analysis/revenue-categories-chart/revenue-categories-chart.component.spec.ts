import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueCategoriesChartComponent } from './revenue-categories-chart.component';

describe('RevenueCategoriesChartComponent', () => {
  let component: RevenueCategoriesChartComponent;
  let fixture: ComponentFixture<RevenueCategoriesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueCategoriesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueCategoriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
