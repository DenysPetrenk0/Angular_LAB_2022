import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { Course } from 'src/app/core/models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  searchControl = new FormControl('');
  existed: boolean = false;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.coursesService.getPosts().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      }
    });
    this.searchControl.valueChanges
      .pipe(debounceTime(500),
        distinctUntilChanged(),
        switchMap((value: string): any => {
          return this.coursesService.filterPost(value)
        })).subscribe((value: any) => {
          if (value.length < 1) {
            this.existed = true;
          }
          this.courses = value;
        }
        )
  }

  hendleEdit(id: number): void {
    this.router.navigate(['/courses', id])
  }

  hendleDelete(id: number): void {
    this.coursesService.deletePost(id)
      .pipe(switchMap(() => {
        return this.coursesService.getPosts()
      }), tap((data) => {
        this.courses = data
      }))
      .subscribe()
  }

}
