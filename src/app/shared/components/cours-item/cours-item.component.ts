import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cours-item',
  templateUrl: './cours-item.component.html',
  styleUrls: ['./cours-item.component.scss']
})
export class CoursItemComponent implements OnInit {

  @Input() item: any;

  @Output() deleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete() {
    this.deleted.emit(this.item.id);
  }

}
