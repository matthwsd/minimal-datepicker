import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalDatepickerComponent } from './components/minimal-datepicker/minimal-datepicker.component';
import { DateService } from './services/date-service.service';



@NgModule({
  declarations: [MinimalDatepickerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MinimalDatepickerComponent
  ],
  providers: [
    DateService
  ]
})
export class MinimalDatepickerModule { }
