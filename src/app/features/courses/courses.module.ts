import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './containers/course/course.component';
import { CoursFormComponent } from './components/cours-form/cours-form.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CoursFormComponent
  ],
  imports: [
    CommonModule, CoursesRoutingModule
  ]
})
export class CoursesModule { }
