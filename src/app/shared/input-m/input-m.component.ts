import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-m',
  templateUrl: './input-m.component.html',
  styleUrls: ['./input-m.component.scss']
})
export class InputMComponent implements OnInit {
  @Input() label : string = '';
  @Input() type : string = 'text';
  constructor() { }

  ngOnInit(): void {
  }

}
