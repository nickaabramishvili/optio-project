import { Component } from '@angular/core';
import { map } from 'rxjs';
import { FactsService } from '../shared/services/facts.service';
import { DateRange } from '../shared/models/date-range.model';
import { CategoriesChartData } from '../shared/models/categories-chart-data.model';
import { TransactionItem } from '../shared/models/transaction-item.model';
import { Store } from '@ngrx/store';
import { RevenueAnalysisActions } from '../store/actions';
import { RevenueAnalysisSelectors } from '../store/selectors';
@Component({
  selector: 'app-revenue-analysis',
  templateUrl: './revenue-analysis.component.html',
  styleUrls: ['./revenue-analysis.component.scss'],
})
export class RevenueAnalysisComponent {
  constructor(private factsService: FactsService, private store: Store) {}
  chartData$ = this.store.select(
    RevenueAnalysisSelectors.selectRevenueAnalysisChartData
  );
  loading$ = this.store.select(RevenueAnalysisSelectors.selectLoadingStatus);
  dateRange: DateRange = { startDate: null, endDate: null };
  chartCategoryData: CategoriesChartData[] = [];
  chartIntensData: TransactionItem[] = [];
  chartCategoryDataisLoading: boolean = false;
  chartIntensityDataisLoading: boolean = false;

  onDateChanged(dateRange: DateRange) {
    this.dateRange = dateRange;
    // this.loadCategoryChartdata(dateRange);
    // this.loadIntensityChartData(dateRange);
    this.store.dispatch(
      RevenueAnalysisActions.searchClicked({
        payLoad: dateRange,
      })
    );
  }

  loadCategoryChartdata(dateRange: DateRange) {
    this.chartCategoryDataisLoading = true;
    this.chartCategoryData = [];
    this.factsService
      .getTransactions('category', dateRange)
      .pipe(
        map((response) => {
          const data: { name: string; value: number }[] = [];
          response.data.forEach((item) =>
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
