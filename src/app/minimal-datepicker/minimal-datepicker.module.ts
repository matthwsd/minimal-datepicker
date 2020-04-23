import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalDatepickerComponent } from './components/minimal-datepicker/minimal-datepicker.component';
import { DateService } from './services/date-service.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MinimalDatepickerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MinimalDatepickerComponent
  ],
  providers: [
    DateService
  ]
})
export class MinimalDatepickerModule { }
