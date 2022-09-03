import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { FactsService } from '../shared/services/facts.service';
@Component({
  selector: 'app-revenue-analysis',
  templateUrl: './revenue-analysis.component.html',
  styleUrls: ['./revenue-analysis.component.scss'],
})
export class RevenueAnalysisComponent implements OnInit {
  constructor(private factsService: FactsService) {}

  // const chartCategoryData = []
  // const chartDailiyDAta = []
  ngOnInit(): void {}

  // datechanged({startDate,endDAte}){

  //     this.loadCategoryChartdata(startDate,endDAte);
  //     this.loaddailyChartData(startDate,endDAte);

  // }

  // loadCategoryChartdata(startDate,endDate){
  //   this.factsService.getPosts('category',startDAte,endDate).subscribe((data) => {
  //     this.chartCategoryData  =data;
  //     console.log(data);
  //   });
  // }

  // loaddailyChartData(startDate,endDAte){

  //   this.factsService.getPosts('daily',startDAte,endDate).subscribe((data) => {
  //     this.chartCategoryData  =data;
  //     console.log(data);
  //   });
  // }
}
