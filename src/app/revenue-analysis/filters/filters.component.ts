import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FactsService } from '../../shared/services/facts.service';
import * as moment from 'moment';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  dateFilterForm: UntypedFormGroup;
  @Output() dateChanged: EventEmitter<{ startDate: string; endDate: string }> =
    new EventEmitter();
  constructor(private factsService: FactsService) {
    this.dateFilterForm = new UntypedFormGroup({
      startDate: new UntypedFormControl('', [Validators.required]),
      endDate: new UntypedFormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    const startDate = moment(this.dateFilterForm.value.startDate).format(
      'YYYY-MM-DD'
    );
    const endDate = moment(this.dateFilterForm.value.endDate).format(
      'YYYY-MM-DD'
    );

    this.dateChanged.emit({ startDate, endDate });
  }

  ngOnInit(): void {}
}
