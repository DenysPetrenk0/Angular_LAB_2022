import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Course } from 'src/app/core/models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getPosts().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      }
    })
  }

  hendleDelete(id: number) {
    this.coursesService.deletePost(id)
      .pipe(switchMap(() => {
        return this.coursesService.getPosts()
      }), tap((data) => {
        this.courses = data
      }))
      .subscribe()
  }

}
