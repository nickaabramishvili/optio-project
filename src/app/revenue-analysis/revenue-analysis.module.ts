import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { RevenueCategoriesChartComponent } from './revenue-categories-chart/revenue-categories-chart.component';
import { RevenueIntensityChartComponent } from './revenue-intensity-chart/revenue-intensity-chart.component';
import { EveryDayFactsTableComponent } from './every-day-facts-table/every-day-facts-table.component';
import { RevenueAnalysisComponent } from './revenue-analysis.component';

@NgModule({
  declarations: [
    FiltersComponent,
    RevenueCategoriesChartComponent,
    RevenueIntensityChartComponent,
    EveryDayFactsTableComponent,
    RevenueAnalysisComponent,
  ],
  imports: [CommonModule],
})
export class RevenueAnalysisModule {}
