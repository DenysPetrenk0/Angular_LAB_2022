import { Course } from './../../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_API = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Course[]>(`posts`);
  }

  deletePost(id: number) {
    return this.http.delete(`/posts/${id}`);
  }
}
