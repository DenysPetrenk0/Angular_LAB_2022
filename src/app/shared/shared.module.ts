import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursItemComponent } from './components/cours-item/cours-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ConvertingTimePipe } from './pipe/converting-time.pipe';
import { DateTypeDirective } from './directives/date-type.directive';



@NgModule({
  declarations: [
    CoursItemComponent,
    LoaderComponent,
    ConvertingTimePipe,
    DateTypeDirective
  ],
  exports: [
    CoursItemComponent,
    LoaderComponent,
    ConvertingTimePipe,
    DateTypeDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
