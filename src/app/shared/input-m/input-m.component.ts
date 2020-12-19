import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'input-m',
  templateUrl: './input-m.component.html',
  styleUrls: ['./input-m.component.scss']
})
export class InputMComponent implements OnInit {
  @Input() label : string = '';
  @Input() type : string = 'text';
  @Input() dataSelect : any[] = [];
  @Input() controlForm : FormGroup = new FormGroup({});
  @Input() controlName : string = '';

  formControl : FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {

    this.formControl= this.controlForm.get(this.controlName) as FormControl;

  }

}
