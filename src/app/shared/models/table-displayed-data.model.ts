import { DateRange } from './date-range.model';

export interface TableDisplayedData {
  dateRangeFromForm: DateRange | null;
  sortBy: string | null;
  sortDirection: string | null;
  pageIndex: number | null;
}
