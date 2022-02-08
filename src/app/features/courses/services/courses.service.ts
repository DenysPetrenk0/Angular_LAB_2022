import { Injectable } from '@angular/core';
import { CoursesApiService } from 'src/app/core/services/courses/courses-api.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private coursesApiService: CoursesApiService) { }

  getPosts() {
    return this.coursesApiService.getPosts();
  }

  deletePost(id: number) {
    return this.coursesApiService.deletePost(id)
  }
}
