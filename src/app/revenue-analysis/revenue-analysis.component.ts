import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class RevenueAnalysisComponent implements OnInit, AfterViewInit {
  constructor(private factsService: FactsService) {}

  chartCategoryData = [];
  chartIntensData = [];
  tableFactsData = [];
  ngOnInit(): void {}

  onDateChanged(dateRange: DateRange) {
    this.loadCategoryChartdata(dateRange);
    this.loadDailyChartData(dateRange);
    this.loadDailyTableData(dateRange);
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

  loadDailyTableData(dateRange: DateRange) {
    this.factsService
      .getFactsByDay('category', dateRange)
      .pipe(
        map((response) => {
          const data: {
            dimension: string;
            date: string;
            quantity: number;
            volume: number;
            average: number;
            differenceQuantity: number;
            differenceVolume: number;
          }[] = [];
          response.data.entities.forEach((item: any) =>
            data.push({
              dimension: item.dimension,
              date: item.date,
              quantity: item.quantity,
              volume: item.volume,
              average: item.average,
              differenceQuantity: item.differenceQuantity,
              differenceVolume: item.differenceVolume,
            })
          );
          return data;
        })
      )
      .subscribe((response: any) => {
        this.tableFactsData = response;
      });
  }
  ngAfterViewInit() {
    console.log(this.tableFactsData);
    console.log(this.chartCategoryData);
    console.log(this.chartIntensData);
  }
}
