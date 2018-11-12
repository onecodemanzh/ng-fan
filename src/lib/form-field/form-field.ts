import { Component, OnInit, ViewEncapsulation } from '@angular/core';


/* 字段外观 standard只有下边框， outline有四边 */
export type FanFormFieldAppearance = 'standard' | 'outline';

@Component({
  selector: `
    [fan-form-field],fan-form-field
  `,
  host: {
    'class': 'fan-form-field'
  },
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'form-field.html',
  styleUrls: ['form-field.scss']
})
export class FanFormField implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('fan-form');
  }

}
