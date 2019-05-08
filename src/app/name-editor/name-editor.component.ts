import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

isChecked = false;
foods: Food[] = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];
states = [
{id: 1, name: 'Rajasthan'},
{id: 2, name: 'Punjab'},
{id: 3, name: 'Haryana'},
{id: 4, name: 'Gujarat'},
{id: 5, name: 'MadhyaPradesh'},
{id: 6, name: 'UtterPradesh'},
{id: 7, name: 'Himachal'},
];
// color = 2;
  constructor() { }

  ngOnInit() {

  }
onChange($event) {
console.log($event);
}
}
