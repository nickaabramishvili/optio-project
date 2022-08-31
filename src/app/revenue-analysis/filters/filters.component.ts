import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean;
  constructor() {
    this.hide = true;
    this.loginForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.loginForm.status);

    return;
  }
  ngOnInit(): void {}
}
