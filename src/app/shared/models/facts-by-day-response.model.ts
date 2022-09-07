import { PeriodicElement } from './table-data.model';
export interface FactsByDayResponse {
  data: {
    total: number;
    entities: PeriodicElement[];
  };
}
