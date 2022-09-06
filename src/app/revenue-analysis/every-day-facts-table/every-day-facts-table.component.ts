import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FactsService } from 'src/app/shared/services/facts.service';
import { DateRange } from '../revenue-analysis.component';
import { BehaviorSubject, merge, of } from 'rxjs';
import {
  startWith,
  switchMap,
  catchError,
  map,
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';
export interface PeriodicElement {
  dimension: string;
  date: string;
  quantity: number;
  volume: number;
  average: number;
  differenceQuantity: number;
  differenceVolume: number;
}
// prettier-ignore

// prettier-ignore
@Component({
  selector: 'app-every-day-facts-table',
  templateUrl: './every-day-facts-table.component.html',
  styleUrls: ['./every-day-facts-table.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EveryDayFactsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  private dateRange$ = new BehaviorSubject<DateRange>({startDate:null,endDate:null});

  @Input() set dateRange(data:DateRange){    
    this.dateRange$.next(data);
  }

  loading$ = new BehaviorSubject<boolean>(false)
  displayedColumns: string[] = [
    'dimension',
    'date',
    'quantity',
    'volume',
    'average',
    'differenceQuantity',
    'differenceVolume',
  ];   
  resultsLength = 0;
  data:any =[]


  constructor(private factsService: FactsService) {}


  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.dateRange$,this.paginator.page)
    .pipe(
      filter(() => {
        const dateRanges = this.dateRange$.value;
        return !!( dateRanges?.startDate && dateRanges?.endDate)
      }),
      switchMap(() => 
       this.factsService.getFactsByDay(this.dateRange$.value,{sortBy:this.sort.active,sortDirection:this.sort.direction,pageIndex:this.paginator.pageIndex})
       .pipe(
        tap(() => this.loading$.next(true)),
        catchError(() => of(null)))
       ),
      map((response:any) => {
        if (!response.data.entities.length) {
          return [];
        }

        this.resultsLength =response.data.total;
        return response.data.entities;
      })
    ).subscribe(data => 
      {
        this.data = data
        this.loading$.next(false)
      });
    
  }

}
