import { DateRange } from 'src/app/shared/models/date-range.model';
import { PeriodicElement } from 'src/app/shared/models/table-data.model';
import { TableDisplayedData } from 'src/app/shared/models/table-displayed-data.model';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';

export interface RevenueAnalysisState {
  categoryChartData: TransactionItem[];
  intensityChartData: TransactionItem[];
  tableData: PeriodicElement[];
  tableDataLength: number;
  filterDateRange: DateRange | null;
  loadingForCategoriesChart: boolean;
  loadingForIntensityChart: boolean;
  loadingforTable: boolean;
  // f2 s r odaawve yvelgan mtel reposhi yvelga ngadaarqmevs
}
