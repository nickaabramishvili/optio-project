import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FactsService {
  constructor(private httpClient: HttpClient) {}
  getPosts(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.factsWithDimensionsAndFiltersByDate}`
    );
  }
}
