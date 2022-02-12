import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursFormComponent } from './cours-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CoursFormComponent],
  exports: [CoursFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CoursFormModule { }
