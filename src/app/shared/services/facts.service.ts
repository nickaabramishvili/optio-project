import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRange } from '../../shared/models/date-range.model';
import { SortData } from '../../shared/models/facts-by-day-pagination.model';
import { TransactionsResponse } from '../models/transactions-response.model';
import { FactsByDayResponse } from '../models/facts-by-day-response.model';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  startDate: string = '';
  endDate: string = '';
  constructor(private httpClient: HttpClient) {}

  // for charts
  getChartsData(
    dimension: string,
    dateRange: DateRange
  ): Observable<TransactionsResponse> {
    return this.httpClient.post<TransactionsResponse>(
      `${environment.apiBaseUrl}${environment.facts}`,
      {
        dimension,
        types: ['income'],
        gteDate: dateRange.startDate,
        lteDate: dateRange.endDate,
      }
    );
  }

  // for table
  getTableData(
    dateRange: DateRange,
    { pageIndex, sortBy, sortDirection }: SortData
  ): Observable<FactsByDayResponse> {
    return this.httpClient.post<FactsByDayResponse>(
      `${environment.apiBaseUrl}${environment.factsByDay}`,
      {
        dimension: 'category',
        types: ['income'],
        gteDate: dateRange.startDate,
        lteDate: dateRange.endDate,
        sortBy,
        sortDirection,
        pageIndex,
        pageSize: 50,
      }
    );
  }
}
