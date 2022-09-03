import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-revenue-categories-chart',
  templateUrl: './revenue-categories-chart.component.html',
  styleUrls: ['./revenue-categories-chart.component.scss'],
})
export class RevenueCategoriesChartComponent implements OnInit {
  @ViewChild('main') main: ElementRef | any;
  ebee: any;
  chartDom: any;
  myChart: any;
  option: echarts.EChartsOption | any;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.chartDom = this.main.nativeElement!;
    this.myChart = echarts.init(this.chartDom);

    this.option = {
      legend: {
        top: 'bottom',
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [50, 250],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8,
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 2, name: 'rose 8' },
          ],
        },
      ],
    };

    this.option && this.myChart.setOption(this.option);
  }
}
