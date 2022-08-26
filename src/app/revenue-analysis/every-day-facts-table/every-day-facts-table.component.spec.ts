import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryDayFactsTableComponent } from './every-day-facts-table.component';

describe('EveryDayFactsTableComponent', () => {
  let component: EveryDayFactsTableComponent;
  let fixture: ComponentFixture<EveryDayFactsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryDayFactsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveryDayFactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
