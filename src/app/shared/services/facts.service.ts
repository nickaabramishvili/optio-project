import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRange } from '../../revenue-analysis/revenue-analysis.component';
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
  getFactsByDay(dimension: string, dateRange: DateRange): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.apiBaseUrl}${environment.factsByDay}`,
      {
        dimension,
        types: ['income'],
        gteDate: dateRange.startDate,
        lteDate: dateRange.endDate,
        sortBy: 'date',
        sortDirection: 'asc',
        pageIndex: 0,
        pageSize: 50,
      }
    );
  }
}
