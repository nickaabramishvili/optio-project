import { DateRange } from 'src/app/shared/models/date-range.model';
import { TableDisplayedData } from 'src/app/shared/models/table-displayed-data.model';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';

export interface RevenueAnalysisState {
  categoryChartData: TransactionItem[];
  intensityChartData: TransactionItem[];
  tableData: TableDisplayedData;
  filterDateRange: DateRange | null;
  loadingForCategoriesChart: false;
  loadingForIntensityChart: false;
  loadingforTable: false;
  // f2 s r odaawve yvelgan mtel reposhi yvelga ngadaarqmevs
}
