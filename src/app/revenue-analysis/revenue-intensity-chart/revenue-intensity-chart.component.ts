import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DateRange } from '../../shared/models/date-range.model';
import * as echarts from 'echarts';
import * as moment from 'moment';
import { TransactionItem } from '../../shared/models/transaction-item.model';
import { CategoriesChartData } from 'src/app/shared/models/categories-chart-data.model';
type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-revenue-intensity-chart',
  templateUrl: './revenue-intensity-chart.component.html',
  styleUrls: ['./revenue-intensity-chart.component.scss'],
})
export class RevenueIntensityChartComponent
  implements AfterViewInit, OnChanges
{
  @ViewChild('intensityChart') intensityChart!: ElementRef;

  @Input() dateRange!: DateRange;

  @Input() data!: TransactionItem[] | null;

  @Input() loading!: boolean | null;
  option: any = {
    tooltip: {},
    visualMap: {
      min: 0,
      max: 100000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: '65',
    },
    calendar: [],
    series: [],
  };

  dateRanges: { [key: string]: string[] } = {};

  myChart: any;

  ngAfterViewInit() {
    this.myChart = echarts.init(this.intensityChart.nativeElement!);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.myChart && changes['data']) {
      if (!this.myChart) {
        return;
      }

      this.option.calendar = [];
      this.option.series = [];
      const dataSeries: { [key: string]: any[] } = {};

      // this.dateRanges.forEach()
      this.data?.forEach((item) => {
        const year = moment(item.dimension).year().toString();
        if (!dataSeries[year]) {
          dataSeries[year] = [
            [
              echarts.format.formatTime('yyyy-MM-dd', item.dimension),
              item.volume / 100,
            ],
          ];
        } else {
          dataSeries[year].push([
            echarts.format.formatTime('yyyy-MM-dd', item.dimension),
            item.volume / 100,
          ]);
        }
      });

      let top = 120;
      let index = 0;

      for (const [key, value] of Object.entries(this.dateRanges)) {
        this.option.calendar.push({
          top,
          range: value,
          orient: 'horizontal',
          cellSize: ['auto', 12],
        });

        this.option.series.push({
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: dataSeries[key],
          calendarIndex: index,
        });
        top += 120;
        index += 1;
      }

      this.myChart.setOption(this.option, true);
    }
    const dateRange = changes['dateRange'];
    if (
      dateRange &&
      dateRange.currentValue.startDate &&
      dateRange.currentValue.endDate
    ) {
      this.dateRanges = {};
      const startDate = moment(dateRange.currentValue.startDate);
      const endDate = moment(dateRange.currentValue.endDate);

      const isOneMonth = startDate.isSame(endDate, 'month');
      while (
        endDate > startDate ||
        startDate.format('M') === endDate.format('M')
      ) {
        const monthYear = startDate.format('yyyy');
        if (!this.dateRanges[monthYear]) {
          this.dateRanges[monthYear] = [
            startDate.startOf('month').format('yyyy-MM-DD'),
          ];

          if (isOneMonth) {
            this.dateRanges[monthYear].push(
              startDate.endOf('month').format('yyyy-MM-DD')
            );
          }
        } else {
          this.dateRanges[monthYear][1] = startDate
            .endOf('month')
            .format('yyyy-MM-DD');
        }
        startDate.add(1, 'month');
      }
    }
  }
}
