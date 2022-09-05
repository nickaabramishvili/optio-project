import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-revenue-intensity-chart',
  templateUrl: './revenue-intensity-chart.component.html',
  styleUrls: ['./revenue-intensity-chart.component.scss'],
})
export class RevenueIntensityChartComponent implements AfterViewInit {
  @ViewChild('intensityChart') intensityChart: ElementRef | any;

  days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday'];

  option: any = {
    title: {
      top: 30,
      left: 'center',
      text: 'Daily Step Count',
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 100000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65,
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2018',
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: [],
    },
  };
  myChart: any;

  @Input() set data(items: any[]) {
    if (!this.myChart) {
      return;
    }

    this.option.series.data = items.map((item) => [
      echarts.format.formatTime('yyyy-MM-dd', item.dimension),
      item.volume / 100,
    ]);

    // console.log(this.option);

    this.myChart.setOption(this.option);
  }

  ngAfterViewInit() {
    this.myChart = echarts.init(this.intensityChart.nativeElement!);
  }
}
