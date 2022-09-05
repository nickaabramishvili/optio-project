import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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
const ELEMENT_DATA: PeriodicElement[] = [
   
  { dimension: '1', date: '1', quantity: 1.0079, volume: 1, average: 1 , differenceQuantity: 1.0079, differenceVolume: 1 },
  { dimension: '2', date: '1',  quantity: 4.0026, volume: 1 , average: 3 , differenceQuantity: 1.0079, differenceVolume: 6 },
  { dimension: '3', date: '54124',  quantity: 6.941, volume: 1 , average: 3211 , differenceQuantity: 1.0079, differenceVolume: 1 },
  { dimension: '4', date: '1',  quantity: 9.0122, volume: 1 , average: 4121 , differenceQuantity: 1.0079, differenceVolume: 1 },
  { dimension: '41245', date: '1',  quantity: 10.811, volume: 5, average: 1  , differenceQuantity: 1.0079, differenceVolume: 7 },
  { dimension: '6', date: '1', quantity: 12.0107, volume: 1, average: 1 , differenceQuantity: 6.0079, differenceVolume: 1 },
  { dimension: '7', date: '1', quantity: 14.0067, volume: 1, average: 1 , differenceQuantity: 1.0079, differenceVolume: 1 },
  { dimension: '418', date: '412w1',  quantity: 15.9994, volume: 11, average: 1 , differenceQuantity: 1.0079, differenceVolume: 1 },
  { dimension: '9', date: '1', quantity: 18.9984, volume: 1, average: 1 , differenceQuantity: 1.0079, differenceVolume: 1 },
  { dimension: '10', date:'1',   quantity: 20.1797, volume: 1 , average: 1 , differenceQuantity: 1.0079, differenceVolume: 1 },
];
// prettier-ignore
@Component({
  selector: 'app-every-day-facts-table',
  templateUrl: './every-day-facts-table.component.html',
  styleUrls: ['./every-day-facts-table.component.scss'],
})
export class EveryDayFactsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'dimension',
    'date',
    'quantity',
    'volume',
    'average',
    'differenceQuantity',
    'differenceVolume',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort | any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ngOnInit(): void {}
}
