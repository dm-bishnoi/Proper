import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
searchField: FormControl;
searches: string[] = [];
onSubmit() {

  }
  constructor() { }

  ngOnInit() {
this.searchField = new FormControl();
this.searchField.valueChanges.subscribe(term => {this.searches.push(term);
});
  }

}
