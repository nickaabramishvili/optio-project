import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FactsService {
  constructor(private httpClient: HttpClient) {}
  // getPosts(dimennsion,.startDate,endDate): Observable<any> {
  //   return this.httpClient.post<any>(
  //     `${environment.apiBaseUrl}/analytics/transactions/facts/aggregate`,
  //     {
  //       "dimension": dimennsion,
  //       "types": [
  //         "income"
  //       ],
  //       "gteDate":startDAte,
  //       "lteDate":endDAte
  //     }
  //   );
  // }
  getFacts(): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.apiBaseUrl}${environment.facts}`,
      {
        dimension: 'category',
        types: ['income'],
        gteDate: '2018-01-01',
        lteDate: '2018-01-31',
      }
    );
  }
  getFactsByDate(): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.apiBaseUrl}${environment.factsByDate}`,
      {
        dimension: 'category',
        types: ['income'],
        gteDate: '2018-01-01',
        lteDate: '2018-01-31',
        sortBy: 'date',
        sortDirection: 'asc',
        pageIndex: 0,
        pageSize: 50,
      }
    );
  }
}
// moment js formatirebistvis angularistvis ro davaformato da mse gadavce and me davwero formatireba magisi
// data unda gadavawodo mshobels da mshobildan shvils chavawodo
