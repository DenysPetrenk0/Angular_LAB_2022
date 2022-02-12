import { tap } from 'rxjs';
import { CoursesService } from './../../services/courses.service';
import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CourseComponent implements OnInit {
  id: number = 0;
  course!: Course;

  constructor(
    private coursesService: CoursesService,
    private activateRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.coursesService.getCourseById(this.id)
        .pipe(tap((course) => {
          this.course = course,
            this.cdr.markForCheck();
        }))
        .subscribe();
    }

  }

  editHandler(course: Course) {
    this.coursesService.editCourse(course).subscribe();
  }

  saveHandler(course: Course) {
    this.coursesService.addCourse(course).subscribe();
  }
}
