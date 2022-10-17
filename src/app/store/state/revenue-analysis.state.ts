import { DateRange } from 'src/app/shared/models/date-range.model';

export interface RevenueAnalysisState {
  loading: boolean;
  filter: DateRange | null;
  chartData: any[];
  tableData: any[];
}
