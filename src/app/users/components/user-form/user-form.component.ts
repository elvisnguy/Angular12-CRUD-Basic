import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnChanges, OnInit {
  @Input() user: User;

  @Output() save = new EventEmitter<User>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Update gia tri cua form khi dung reactive form
    if (this.user) {
      const { name, email } = this.user;
      this.form.patchValue({ name, email });
    }
  }

  ngOnInit(): void {
    // khong get duoc user vi data tư api chua tra ve
    console.log('user', this.user);
  }

  onSubmit(): void {
    this.save.emit(this.user);
    console.log('user', this.form.value);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [this.user?.name],
      email: [],
    });
  }
}
