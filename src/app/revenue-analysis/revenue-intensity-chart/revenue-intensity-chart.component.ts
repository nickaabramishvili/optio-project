import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import * as echarts from 'echarts';
import * as moment from 'moment';
type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-revenue-intensity-chart',
  templateUrl: './revenue-intensity-chart.component.html',
  styleUrls: ['./revenue-intensity-chart.component.scss'],
})
export class RevenueIntensityChartComponent implements AfterViewInit {
  @ViewChild('intensityChart') intensityChart: ElementRef | any;
  @Input() loading = false;
  @Input() set data(items: any[]) {
    if (!this.myChart) {
      return;
    }
    this.option.calendar = [];
    this.option.series = [];
    const dataSeries: { [key: string]: any[] } = {};
    items.forEach((item) => {
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
    for (const [key, value] of Object.entries(dataSeries)) {
      this.option.calendar.push({
        top,
        range: key.toString(),
        orient: 'horizontal',
        cellSize: ['auto', 12],
      });

      this.option.series.push({
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: value,
        calendarIndex: index,
      });
      top += 120;
      index += 1;
    }

    this.myChart.setOption(this.option, true);
  }

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
  myChart: any;

  ngAfterViewInit() {
    this.myChart = echarts.init(this.intensityChart.nativeElement!);
  }
}
