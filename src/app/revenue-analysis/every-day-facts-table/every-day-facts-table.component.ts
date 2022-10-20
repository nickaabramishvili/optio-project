import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FactsService } from 'src/app/shared/services/facts.service';
import { DateRange } from '../../shared/models/date-range.model';
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
import { PeriodicElement } from '../../shared/models/table-data.model';
@Component({
  selector: 'app-every-day-facts-table',
  templateUrl: './every-day-facts-table.component.html',
  styleUrls: ['./every-day-facts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EveryDayFactsTableComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private dateRange$ = new BehaviorSubject<DateRange>({
    startDate: null,
    endDate: null,
  });

  @Input() dateRange!: DateRange;

  @Input() loading!: boolean | null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dateRange'].currentValue.startDate) {
      this.dateRange$.next(this.dateRange);
    }
    console.log(this.dateRange);
  }

  loading$ = new BehaviorSubject<boolean>(false);
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
  data: PeriodicElement[] = [];
  // @Input() data : PeriodicElement[] = []

  constructor(private factsService: FactsService) {}

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.dateRange$, this.paginator.page)
      .pipe(
        filter(() => {
          const dateRanges = this.dateRange$.value;
          return !!(dateRanges?.startDate && dateRanges?.endDate);
        }),
        switchMap(() =>
          this.factsService
            .getTableData(this.dateRange$.value, {
              sortBy: this.sort.active,
              sortDirection: this.sort.direction,
              pageIndex: this.paginator.pageIndex,
            })
            .pipe(
              tap(() => this.loading$.next(true)),
              catchError(() => of(null))
            )
        ),
        map((response) => {
          if (!response?.data.entities.length) {
            return [];
          }

          this.resultsLength = response.data.total;
          console.log(response);
          console.log(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex
          );

          return response.data.entities;
        })
      )
      .subscribe((data) => {
        this.data = data;
        this.loading$.next(false);
        console.log(data);
        console.log(data);
      });
  }
}
