import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRange } from '../../revenue-analysis/revenue-analysis.component';

export interface FactsByDayPagination {
  pageIndex: number;
  sortBy: string;
  sortDirection: string;
}
@Injectable({
  providedIn: 'root',
})
export class FactsService {
  startDate: string = '';
  endDate: string = '';
  constructor(private httpClient: HttpClient) {}

  // for charts
  getTransactions(dimension: string, dateRange: DateRange): Observable<any> {
    return this.httpClient.post<any>(
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
  ) {
    return this.httpClient.post<any>(
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
