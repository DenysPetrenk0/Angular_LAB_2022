import { CoursesApiService } from 'src/app/core/services/courses/courses-api.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFormResolver implements Resolve<boolean> {
  constructor(private coursesApiService: CoursesApiService,) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.params["id"]
    return this.coursesApiService.getCourseById(id);
  }
}
