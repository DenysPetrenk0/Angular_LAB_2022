import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, Observable, pipe, tap } from 'rxjs';
import { Course } from 'src/app/core/models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {

  courses$!: Observable<Course[]>;
  searchControl = new FormControl('');
  existed: boolean = false;
  existedLoadMore: boolean = false;
  start: number = 0;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getPosts();
    this.searchControl.valueChanges
      .pipe(debounceTime(500),
        distinctUntilChanged(),
        switchMap((value: string): any => {
          return this.courses$ = this.coursesService.filterPost(value);
        })).subscribe((value: any) => {
          if (value.length < 1) {
            this.existed = true;
          }
        }
        )
  }

  hendleEdit(id: number): void {
    this.router.navigate(['/courses', id])
  }

  hendleDelete(id: number): void {
    this.coursesService.deletePost(id).subscribe();
    this.courses$ = this.coursesService.getPosts();
  }

  hendlerLoadMore() {
    this.start += 3;
    this.courses$ = this.coursesService.getPosts(this.start)
      .pipe(tap((data) => {
        if (data.length < 3) {
          this.existedLoadMore = true;
        }
      }))
  }
}
