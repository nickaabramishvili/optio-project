import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs';
import { FactsService } from '../shared/services/facts.service';

export interface DateRange {
  startDate: string;
  endDate: string;
}
@Component({
  selector: 'app-revenue-analysis',
  templateUrl: './revenue-analysis.component.html',
  styleUrls: ['./revenue-analysis.component.scss'],
})
export class RevenueAnalysisComponent implements OnInit {
  constructor(private factsService: FactsService) {}

  chartCategoryData = [];
  chartIntensData = [];
  ngOnInit(): void {}

  onDateChanged(dateRange: DateRange) {
    this.loadCategoryChartdata(dateRange);
    this.loadDailyChartData(dateRange);
  }

  loadCategoryChartdata(dateRange: DateRange) {
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
        this.chartCategoryData = response;
        console.log(this.chartCategoryData);
      });
  }

  loadDailyChartData(dateRange: DateRange) {
    this.factsService
      .getTransactions('date', dateRange)
      .subscribe((response: any) => {
        this.chartIntensData = response.data;
      });
  }
}
