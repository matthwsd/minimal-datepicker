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

  public getPickerPopulate(month: string, year: string): Population[] {
    var daysinMonth: Population[] = [];
    var baseDate = this.core(`${year}/${month}`, "YY/MMMM");
    var initDate = baseDate.startOf('month');

    console.log(initDate.weekday())
    if (initDate.weekday() > 0) {
      let diff = initDate.weekday();
      for (var day = diff; day > 0; day--) {
        let dateToPush = this.core(initDate).subtract(day, 'd');
        daysinMonth.push({ isMonthBase: false, date: dateToPush });
      }
    }
    daysinMonth.push({ isMonthBase: true, date: initDate });
    for (var day = 1; day < baseDate.daysInMonth(); day++) daysinMonth.push({ isMonthBase: true, date: this.core(initDate).add(day, 'd') });

    if (daysinMonth.length < 35)
      for (var day = 0; daysinMonth.length < 35; day++) daysinMonth.push({ isMonthBase: false, date: this.core(initDate.endOf('m')).add(day, 'd') });

    return daysinMonth;
  }
}

interface Population {
  date: moment.Moment;
  isMonthBase: boolean;
}
