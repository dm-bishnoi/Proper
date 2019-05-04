import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormControlName, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
// profileForm = new FormGroup({
//   firstName: new FormControl('', Validators.required),
//   lastName: new FormControl(''),
// address: new FormGroup({
// street: new FormControl(''),
// city: new FormControl(''),
// state: new FormControl(''),
// zip: new FormControl('')
// })
// });
profileForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
this.profileForm = this.fb.group({
firstName: [''],
lastName: [''],
address: this.fb.group({
street: [''],
city: [''],
state: [''],
zip: ['']
})
});
  }
onSubmit(formValue) {
  console.log('Form submitted', formValue);
  console.log(this.profileForm);
}
// updateProfile() {
// this.profileForm.patchValue({
// firstName: 'Dharmender',
// address: {
// street: '7 Drew Street',
// }
// });
// }

}
