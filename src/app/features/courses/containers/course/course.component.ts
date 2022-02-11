import { tap } from 'rxjs';
import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  id: number = 0;
  course!: Course;
  constructor(private coursesService: CoursesService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.coursesService.getCourseById(this.id)
        .pipe(tap((course) => {
          this.course = course
        }))
        .subscribe();
    }

  }

  editHandler(course: Course) {
    this.coursesService.editCourse(course).subscribe();
    console.log(course);
  }

  saveHandler(course: Course) {
    this.coursesService.addCourse(course).subscribe();
    console.log(course);
  }

}
