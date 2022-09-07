import { Component, OnInit, AfterViewInit } from '@angular/core';
import { map } from 'rxjs';
import { FactsService } from '../shared/services/facts.service';

export interface DateRange {
  startDate: string | null;
  endDate: string | null;
}
@Component({
  selector: 'app-revenue-analysis',
  templateUrl: './revenue-analysis.component.html',
  styleUrls: ['./revenue-analysis.component.scss'],
})
export class RevenueAnalysisComponent {
  constructor(private factsService: FactsService) {}
  dateRange: DateRange = { startDate: null, endDate: null };
  chartCategoryData = [];
  chartIntensData = [];
  chartCategoryDataisLoading: boolean = false;
  chartIntensityDataisLoading: boolean = false;

  onDateChanged(dateRange: DateRange) {
    this.dateRange = dateRange;
    this.loadCategoryChartdata(dateRange);
    this.loadIntensityChartData(dateRange);
  }

  loadCategoryChartdata(dateRange: DateRange) {
    this.chartCategoryDataisLoading = true;
    this.chartCategoryData = [];
    this.factsService
      .getTransactions('category', dateRange)
      .pipe(
        map((response) => {
          const data: { name: string; value: number }[] = [];
          response.data.forEach((item: any) =>
            data.push({ name: item.dimension, value: item.volume / 100 })
          );
          return data;
        })
      )
      .subscribe((response: any) => {
        this.chartCategoryDataisLoading = false;
        this.chartCategoryData = response;
      });
  }

  loadIntensityChartData(dateRange: DateRange) {
    this.chartIntensityDataisLoading = true;
    this.factsService
      .getTransactions('date', dateRange)
      .subscribe((response: any) => {
        this.chartIntensityDataisLoading = false;
        this.chartIntensData = response.data;
      });
  }
}
