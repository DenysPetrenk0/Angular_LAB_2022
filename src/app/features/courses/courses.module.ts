import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './containers/course/course.component';
import { CoursFormModule } from './components/cours-form/cours-form.module';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,

  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    CoursFormModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
