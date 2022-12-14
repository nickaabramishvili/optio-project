import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CategoriesChartData } from '../../shared/models/categories-chart-data.model';
import * as echarts from 'echarts';
@Component({
  selector: 'app-revenue-categories-chart',
  templateUrl: './revenue-categories-chart.component.html',
  styleUrls: ['./revenue-categories-chart.component.scss'],
})
export class RevenueCategoriesChartComponent
  implements AfterViewInit, OnChanges
{
  @ViewChild('main') main!: ElementRef;

  @Input() loading!: boolean | null;
  @Input() data!: CategoriesChartData[] | null;

  ngOnChanges(changes: SimpleChanges) {
    this.option.series[0].data = this.data;
    this.myChart?.setOption(this.option, true);
  }

  myChart: any;
  option: echarts.EChartsOption | any = {
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
        data: [],
      },
    ],
  };
  ngAfterViewInit(): void {
    this.myChart = echarts.init(this.main.nativeElement!);
  }
}
