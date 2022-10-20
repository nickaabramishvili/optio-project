import { DateRange } from 'src/app/shared/models/date-range.model';
import { TableDisplayedData } from 'src/app/shared/models/table-displayed-data.model';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';

export interface RevenueAnalysisState {
  loading: boolean;
  filterDateRange: DateRange | null;
  categoryChartData: TransactionItem[];
  intensityChartData: TransactionItem[];
  tableData: TableDisplayedData;
  // f2 s r odaawve yvelgan mtel reposhi yvelga ngadaarqmevs
}
