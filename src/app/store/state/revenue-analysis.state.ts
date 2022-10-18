import { DateRange } from 'src/app/shared/models/date-range.model';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';

export interface RevenueAnalysisState {
  loading: boolean;
  filter: DateRange | null;
  categoryChartData: TransactionItem[];
  intensityChartData: TransactionItem[];

  // f2 s r odaawve yvelgan mtel reposhi yvelga ngadaarqmevs
  tableData: any[];
}
