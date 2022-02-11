import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cours-item',
  templateUrl: './cours-item.component.html',
  styleUrls: ['./cours-item.component.scss']
})
export class CoursItemComponent implements OnInit {

  @Input() item: any;

  @Output() deleted = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleEdit() {
    this.edit.emit(this.item.id)
  }

  handleDelete() {
    this.deleted.emit(this.item.id);
  }

}
