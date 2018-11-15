import { FanHint } from './hint';
import { FanError } from './error';
import { FanSuffix } from './suffix';
import { FanPrefix } from './prefix';
import { Component, OnInit, ViewEncapsulation, Input, Inject, ContentChild } from '@angular/core';
import { FanLabel } from './label';
import { FanPlaceholder } from './placeholder';
import { FanFormFieldControl } from './form-field-control';


/* 字段外观 standard只有下边框， outline有四边 */
export type FanFormFieldAppearance = 'standard' | 'underline';

/* Label标签的位置 */
export type FanFormLabelPosition = 'up' | 'left';
@Component({
  selector: `
    [fan-form-field],fan-form-field
  `,
  host: {
    'class': 'fan-form-field',
    '[class.fan-form-field-appearance-standard]': 'appearance == "standard"',
    '[class.fan-form-field-appearance-underline]': 'appearance == "underline"',
    '[class.fan-label-position-up]': 'labelPosition == "up"',
    '[class.fan-label-position-left]': 'labelPosition == "left"',
  },
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'form-field.html',
  styleUrls: ['form-field.scss'],
})
export class FanFormField implements OnInit {
  @ContentChild(FanPlaceholder) _placeholderChild: FanPlaceholder;
  @ContentChild(FanLabel) _labelChild: FanLabel;
  @ContentChild(FanFormFieldControl) _control: FanFormFieldControl<any>;
  @ContentChild(FanPrefix) _prefixChild: FanPrefix;
  @ContentChild(FanSuffix) _suffixChild: FanSuffix;
  @ContentChild(FanError) _errorChild: FanError;
  @ContentChild(FanHint) _hintChild: FanHint;
  constructor() {
  }
  /* 默认标准表单字段：是左右结构，label标签在左边，
     里面的input，textarea 有边框
  */
  @Input() appearance: FanFormFieldAppearance = 'standard';
  @Input() labelPosition: FanFormLabelPosition = 'left';
  ngOnInit() {
    console.log(this._labelChild);
    console.log(this._prefixChild);
    console.log(this._suffixChild);
    console.log(this._errorChild);
    console.log(this._hintChild);
  }

  /* 是否有 placehoder */
  _hasPlaceholder() {
    return !!(this._control && this._control.placeholder || this._placeholderChild);
  }
  /* 是否有label标签 */
  _hasLabel() {
    return !!this._labelChild;
  }


}
