import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { RevenueCategoriesChartComponent } from './revenue-categories-chart/revenue-categories-chart.component';
import { RevenueIntensityChartComponent } from './revenue-intensity-chart/revenue-intensity-chart.component';
import { EveryDayFactsTableComponent } from './every-day-facts-table/every-day-facts-table.component';
import { RevenueAnalysisComponent } from './revenue-analysis.component';
import { RouterModule } from '@angular/router';
import { routes } from './revenue-analysis.routing.module';
import { MaterialModule } from '../assets/libraries/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FiltersComponent,
    RevenueCategoriesChartComponent,
    RevenueIntensityChartComponent,
    EveryDayFactsTableComponent,
    RevenueAnalysisComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class RevenueAnalysisModule {}
