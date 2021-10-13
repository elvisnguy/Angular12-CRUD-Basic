import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {
  @Input() users: Array<User> = [];

  @Output() delete = new EventEmitter<User>();
  constructor(
  ) {}
 
  onDelete(userId) {
    this.delete.emit(userId);
  }

}
