import { Observable } from 'rxjs';
import { Course } from './../../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Course[]> {
    return this.http.get<Course[]>(`posts`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`posts/${id}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`posts/`, course);
  }

  editCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`posts/${course.id}`, course);
  }

  deletePost(id: number) {
    return this.http.delete(`posts/${id}`);
  }

  filterPost(value: string): Observable<any> {
    return this.http.get(`posts?title_like=${value}`);
  }
}
