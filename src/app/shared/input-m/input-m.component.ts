import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-m',
  templateUrl: './input-m.component.html',
  styleUrls: ['./input-m.component.scss']
})
export class InputMComponent implements OnInit {
  @Input() label : string = '';
  @Input() type : string = 'text';
  @Input() dataSelect : any[] = [];
  @Input() nameControl : FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
   console.log(this.dataSelect,"años dentro de mi input component")
  }

}
