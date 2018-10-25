import { Component, OnInit, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { GetComponentSelect, GetAttrs } from '../core';
// const selector: string = GetComponentSelect('button');
// console.log(selector);
const BUTTON_HOST_ATTRIBUTES = GetAttrs('button');
const reg = /\[(.+?)\]/g;
@Component({
  moduleId: module.id,
  // tslint:disable-next-line:max-line-length
  selector: 'button[fan-primary-button],button[fan-info-button],button[fan-success-button],button[fan-danger-button],button[fan-warning-button],button[fan-error-button],button[fan-accent-button]',
  exportAs: 'fanButton',
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

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:max-line-length
  selector: 'a[fan-primary-button],a[fan-info-button],a[fan-success-button],a[fan-danger-button],a[fan-warning-button],a[fan-error-button],a[fan-accent-button]',
  exportAs: 'fanButton, fanAnchor',
  templateUrl: 'button.html',
  styleUrls: ['button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FanAnchor extends FanButton implements OnInit {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
  ngOnInit(): void {
  }

}
