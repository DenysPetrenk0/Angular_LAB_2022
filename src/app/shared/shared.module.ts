import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursItemComponent } from './components/cours-item/cours-item.component';



@NgModule({
  declarations: [
    CoursItemComponent
  ],
  exports: [CoursItemComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
