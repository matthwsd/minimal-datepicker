import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';
@Injectable()
export class DateService {

  private core = moment;
  constructor() {
  }

  public setLocale(locale: string): void {
    this.core.locale(locale);
  }

  public getMonthsName(): string[] {
    return this.core.months();
  }

  public getWeekName(): string[] {
    return this.core.weekdays(true);
  }

  public getWeekNameShort(): string[] {
    return this.core.weekdaysShort(true);
  }

  public getTodayMonth() {
    return this.core().format("MM");
  }

  public getTodayMonthName() {
    return this.core().format("MMMM");
  }

  public getTodayYear() {
    return this.core().format("YYYY");
  }

  public getTodayDay() {
    return this.core().format("DD");
  }

  public getPickerPopulate(month: string, year: string): Population[] {
    var daysinMonth: Population[] = [];
    var baseDate = moment(`${year}/${month}`, "YYYY/MMMM");
    var initDate = baseDate.startOf('month');
    if (initDate.weekday() > 0) {
      let diff = initDate.weekday();
      for (var day = diff; day > 0; day--) {
        let dateToPush = this.core(initDate).subtract(day, 'day');
        daysinMonth.push({ isMonthBase: false, date: dateToPush });
        console.log(dateToPush.format("DD"))
      }
    }
    daysinMonth.push({ isMonthBase: true, date: initDate.startOf("month") });
    console.log(daysinMonth)
    for (var day = 1; day < baseDate.daysInMonth(); day++) daysinMonth.push({ isMonthBase: true, date: this.core(initDate).add(day, 'd') });

    if (daysinMonth.length < 42)
      for (var day = 0; daysinMonth.length < 42; day++) daysinMonth.push({ isMonthBase: false, date: this.core(initDate.endOf('month')).add(day, 'd') });
    return daysinMonth;
  }
}

interface Population {
  date: moment.Moment;
  isMonthBase: boolean;
}
