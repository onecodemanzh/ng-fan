import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
