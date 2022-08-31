import { Component, OnInit } from '@angular/core';
import { FactsService } from '../shared/services/facts.service';
@Component({
  selector: 'app-revenue-analysis',
  templateUrl: './revenue-analysis.component.html',
  styleUrls: ['./revenue-analysis.component.scss'],
})
export class RevenueAnalysisComponent implements OnInit {
  constructor(private factsService: FactsService) {}

  ngOnInit(): void {
    this.factsService.getPosts().subscribe((data) => {
      console.log(data);
    });
  }
}
