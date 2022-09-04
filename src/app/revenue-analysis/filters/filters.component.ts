import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FactsService } from '../../shared/services/facts.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  dateFilterForm: FormGroup;
  hide: boolean;

  constructor(private factsService: FactsService) {
    this.hide = true;
    this.dateFilterForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.dateFilterForm.invalid) {
      return;
    }

    console.log(this.dateFilterForm.status);
    console.log('--------------------------');
    console.log(
      this.dateFilterForm.get('startDate')?.value +
        ' , ' +
        this.dateFilterForm.get('endDate')?.value
    );
    this.factsService.getFacts().subscribe((data) => console.log(data));
    // this.factsService.getFactsByDate().subscribe((data) => console.log(data));
    console.log(typeof this.dateFilterForm.get('startDate')?.value);

    this.factsService.startDate = this.dateFilterForm.get('endDate')?.value;
  }

  ngOnInit(): void {}
}
