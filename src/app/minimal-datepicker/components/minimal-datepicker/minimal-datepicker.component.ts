import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DateService } from '../../services/date-service.service';
import { CustomHeader } from '../../interfaces/CustomHeader';

import * as moment from 'moment';
import { CustomContent } from '../../interfaces/CustomContent';
import { CustomInput } from '../../interfaces/CustomInput';
import { BaseElement } from '../../interfaces/BaseElement';
import { CustomPickerLabel } from '../../interfaces/CustomPickerLabel';


@Component({
  selector: 'min-datepicker',
  templateUrl: './minimal-datepicker.component.html',
  styleUrls: ['./minimal-datepicker.component.scss']
})
export class MinimalDatepickerComponent implements OnInit {

  // Emitters
  @Output() onDateSelected: EventEmitter<string> = new EventEmitter();

  // PARAMETERS VARIABLES
  @Input() dateFormat: string = "DD/MM/YYYY"
  @Input() locale: string = "pt";

  // CORE VARIABLES
  public showPicker: boolean = false;
  public datepickerInput: string = "";
  // public SelectedDay: string;
  public SelectedMonth: string;
  public SelectedYear: string;
  public Months: string[];
  public WeekDays: string[];
  public DaysInMonth: { isInMonthBase: boolean, date: string }[] = [];

  // CUSTOM VARIABLES
  public container: BaseElement;
  public input: CustomInput;
  public header: CustomHeader;
  public content: CustomContent;
  public pickerLabel: CustomPickerLabel;

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.setLocale(this.locale);
    this.Months = this.dateService.getMonthsName();
    this.SelectedMonth = this.dateService.getTodayMonthName();
    this.SelectedYear = this.dateService.getTodayYear();
    // this.SelectedDay = this.dateService.getTodayDay();
    this.WeekDays = this.dateService.getWeekNameShort();
    this.dateService.getPickerPopulate(this.SelectedMonth, this.SelectedYear).forEach(day => this.DaysInMonth.push({
      isInMonthBase: day.isMonthBase,
      date: day.date.format()
    }));
  }

  onInputFocus(): void {
    this.showPicker = true;
  }

  selectDate(date: string) {
    this.showPicker = false;
    this.datepickerInput = moment(date).format(this.dateFormat);
    this.onDateSelected.emit(date);
  }

  next(): void {
    let date = `${this.SelectedYear}/${this.SelectedMonth}`;
    let next = moment(date, "YYYY/MMMM").startOf('month').add(1, 'month');
    this.DaysInMonth = [];
    this.dateService.getPickerPopulate(next.format("MMMM"), next.format("YYYY")).forEach(day => {
      this.DaysInMonth.push({
        isInMonthBase: day.isMonthBase,
        date: day.date.format()
      });
    });

    this.SelectedMonth = next.format("MMMM");
    this.SelectedYear = next.format("YYYY");
  }

  prev(): void {
    let date = `${this.SelectedYear}/${this.SelectedMonth}`;
    let prev = moment(date, "YYYY/MMMM").startOf('month').subtract(1, 'month');
    this.DaysInMonth = [];
    this.dateService.getPickerPopulate(prev.format("MMMM"), prev.format("YYYY")).forEach(day => {
      this.DaysInMonth.push({
        isInMonthBase: day.isMonthBase,
        date: day.date.format()
      });
    });

    this.SelectedMonth = prev.format("MMMM");
    this.SelectedYear = prev.format("YYYY");
  }

}
