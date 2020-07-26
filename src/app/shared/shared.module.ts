import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedOneComponent } from './shared-one/shared-one.component';
import { DatePickerComponent } from './date-picker/date-picker.component'



@NgModule({
  declarations: [SharedOneComponent, DatePickerComponent],
  imports: [
    CommonModule
  ],
  exports: [DatePickerComponent]
})
export class SharedModule { }
