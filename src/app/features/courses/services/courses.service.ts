import { Router } from '@angular/router';
import { catchError, of, tap, Observable, finalize } from 'rxjs';
import { LoaderService } from 'src/app/features/courses/services/loader.service';
import { Injectable } from '@angular/core';
import { CoursesApiService } from 'src/app/core/services/courses/courses-api.service';
import { Course } from 'src/app/core/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private coursesApiService: CoursesApiService,
    private loaderService: LoaderService,
    private router: Router
  ) { }

  getPosts(): Observable<Course[]> {
    this.loaderService.show()
    return this.coursesApiService.getPosts()
      .pipe(tap(() => { this.loaderService.hide() }),
        catchError((error) => {
          this.loaderService.hide();
          return of(error)
        }));
  }

  getCourseById(id: number): Observable<Course> {
    this.loaderService.show()
    return this.coursesApiService.getCourseById(id)
      .pipe(finalize(() => { this.loaderService.hide() }))
  }

  addCourse(course: Course): Observable<Course> {
    this.loaderService.show()
    return this.coursesApiService.addCourse(course)
      .pipe(
        finalize(() => this.loaderService.hide()),
        tap(() => this.router.navigate(['/courses']))
      );
  }

  editCourse(course: Course): Observable<Course> {
    this.loaderService.show()
    return this.coursesApiService.editCourse(course)
      .pipe(
        finalize(() => this.loaderService.hide()),
        tap(() => this.router.navigate(['/courses']))
      );
  }

  deletePost(id: number): Observable<{}> {
    return this.coursesApiService.deletePost(id)
  }

  filterPost(value: string): Observable<Course[]> {
    this.loaderService.show()
    return this.coursesApiService.filterPost(value)
      .pipe(
        finalize(() => this.loaderService.hide()),
      );
  }
}
