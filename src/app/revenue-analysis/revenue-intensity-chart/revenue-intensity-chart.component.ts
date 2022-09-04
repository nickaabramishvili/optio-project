import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-revenue-intensity-chart',
  templateUrl: './revenue-intensity-chart.component.html',
  styleUrls: ['./revenue-intensity-chart.component.scss'],
})
export class RevenueIntensityChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('intensityChart')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    function getVirtulData(year: string) {
      year = year || '2017';
      var date = +echarts.number.parseDate(year + '-01-01');
      var end = +echarts.number.parseDate(+year + 1 + '-01-01');
      var dayTime = 3600 * 24 * 1000;
      var data: [string, number][] = [];
      for (var time = date; time < end; time += dayTime) {
        data.push([
          echarts.format.formatTime('yyyy-MM-dd', time),
          Math.floor(Math.random() * 10000),
        ]);
      }
      return data;
    }

    option = {
      title: {
        top: 30,
        left: 'center',
        text: 'Daily Step Count',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
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
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData('2016'),
        // es data aris mtavari da aq mchirdeba  [string, number][] = []; es iq amas aketebs da ayuris
      },
    };

    option && myChart.setOption(option);
  }
}
