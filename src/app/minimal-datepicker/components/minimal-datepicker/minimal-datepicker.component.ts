import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date-service.service';
import * as moment from 'moment';

@Component({
  selector: 'min-datepicker',
  templateUrl: './minimal-datepicker.component.html',
  styleUrls: ['./minimal-datepicker.component.scss']
})
export class MinimalDatepickerComponent implements OnInit {

  public inputClass: string = "";
  public showPicker: boolean = false;
  public SelectedMonth: string;
  public SelectedYear: string;

  public Months: string[];
  public WeekDays: string[];
  public DaysInMonth: { isInMonthBase: boolean, date: string }[] = [];

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.setLocale('pt');
    this.Months = this.dateService.getMonthsName();
    this.SelectedMonth = this.dateService.getTodayMonthName();
    this.SelectedYear = this.dateService.getTodayYear();
    this.WeekDays = this.dateService.getWeekNameShort();
    this.dateService.getPickerPopulate(this.SelectedMonth, this.SelectedYear).forEach(day => this.DaysInMonth.push({
      isInMonthBase: day.isMonthBase,
      date: day.date.format()
    }));
  }

  onInputFocus() {
    this.showPicker = true;
  }


}
