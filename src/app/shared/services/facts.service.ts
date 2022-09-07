import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRange } from '../../shared/models/date-range.model';
import { PeriodicElement } from '../models/table-data.model';

export interface FactsByDayPagination {
  pageIndex: number;
  sortBy: string;
  sortDirection: string;
}

export interface TransactionItem {
  dimension: string;
  dimensionId: number;
  type: number;
  volume: number;
  quantity: number;
  average: number;
}
export interface TransactionsResponse {
  data: TransactionItem[];
}

export interface FactsByDayResponse {
  data: {
    total: number;
    entities: PeriodicElement[];
  };
}
@Injectable({
  providedIn: 'root',
})
export class FactsService {
  startDate: string = '';
  endDate: string = '';
  constructor(private httpClient: HttpClient) {}

  // for charts
  getTransactions(
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
  getFactsByDay(
    dateRange: DateRange,
    { pageIndex, sortBy, sortDirection }: FactsByDayPagination
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
