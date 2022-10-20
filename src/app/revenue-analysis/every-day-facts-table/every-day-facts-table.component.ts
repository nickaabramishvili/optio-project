import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';
import { FactsService } from 'src/app/shared/services/facts.service';
import { DateRange } from '../../shared/models/date-range.model';
import { PeriodicElement } from '../../shared/models/table-data.model';
@Component({
  selector: 'app-every-day-facts-table',
  templateUrl: './every-day-facts-table.component.html',
  styleUrls: ['./every-day-facts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EveryDayFactsTableComponent {
  @Input() tableData: PeriodicElement[] | null = [];
  @Input() tableDataLength!: number | null;

  @Input() loading!: boolean | null;
  @Output() sortChanged: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = [
    'dimension',
    'date',
    'quantity',
    'volume',
    'average',
    'differenceQuantity',
    'differenceVolume',
  ];

  onSortChanged(event: any) {
    this.sortChanged.emit(event);
  }
}
