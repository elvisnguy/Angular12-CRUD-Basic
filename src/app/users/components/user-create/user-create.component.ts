import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

 @Output() create = new EventEmitter();

 form: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.initForm();
  }

  ngOnInit(): void {
  }


  onCreate()
  {
    this.create.emit(
      this.form.value
    )
    console.log("Send",this.form.value)
  }
  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [],
      email: [],
    });
  }
}
