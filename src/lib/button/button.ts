import { Component, OnInit, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { getComponentSelect, getAttrs } from '../core';
const selector: string = getComponentSelect('button');
const BUTTON_HOST_ATTRIBUTES = getAttrs('button');
const reg = /\[(.+?)\]/g;
@Component({
  moduleId: module.id,
  selector: selector,
  templateUrl: 'button.html',
  styleUrls: ['button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FanButton implements OnInit {

  constructor(public _elementRef: ElementRef) {
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      const Attr = new RegExp(reg).exec(attr)[1];
      if (this._hasHostAttributes(Attr)) {
        (_elementRef.nativeElement as HTMLElement).classList.add(Attr);
      }
    }
  }

  ngOnInit() {
    console.log(BUTTON_HOST_ATTRIBUTES);
  }
  focus(): void {
    this._getHostElement().focus();
  }

  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** 获取按钮是否具有给定的属性之一. */
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }
}

export class FanAnchor extends FanButton implements OnInit {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
  ngOnInit(): void {
  }

}
