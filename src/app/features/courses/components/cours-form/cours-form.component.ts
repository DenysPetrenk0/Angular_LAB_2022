import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';
import { CustomValidator } from './../../../../shared/validators/custom.validators';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cours-form',
  templateUrl: './cours-form.component.html',
  styleUrls: ['./cours-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursFormComponent implements OnInit {

  existed: boolean = false;
  private id!: number;

  @Input() course!: Course

  @Output() save = new EventEmitter<Course>();
  @Output() edit = new EventEmitter<Course>();

  courseForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(50)]],
    duration: ['', [Validators.required, CustomValidator.durationValidator]],
    date: ['', [Validators.required, CustomValidator.dateValidator]],
    author: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.courseForm.patchValue(data[0]);
    }
    )
  }

  onSave() {
    if (this.courseForm.valid) {
      this.save.emit(this.courseForm.value)
    }
  }

  onEdit() {
    if (this.courseForm.valid) {
      this.edit.emit({ ...this.courseForm.value, id: this.id })
    }
  }
}
