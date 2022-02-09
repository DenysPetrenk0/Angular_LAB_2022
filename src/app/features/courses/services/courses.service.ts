import { catchError, of, tap } from 'rxjs';
import { LoaderService } from 'src/app/features/courses/services/loader.service';
import { Injectable } from '@angular/core';
import { CoursesApiService } from 'src/app/core/services/courses/courses-api.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private coursesApiService: CoursesApiService, private loaderService: LoaderService) { }

  getPosts() {
    this.loaderService.show()
    return this.coursesApiService.getPosts()
      .pipe(tap(() => { this.loaderService.hide() }),
        catchError((error) => {
          this.loaderService.hide();
          return of(error)
        }));
  }

  deletePost(id: number) {
    return this.coursesApiService.deletePost(id)
  }
}
