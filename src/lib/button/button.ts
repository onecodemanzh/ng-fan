import { Component, OnInit, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { MixinColor, OwnColor, OwnColorCtor, MixinDisabled, OwnDisableCtor, OwnDisable } from '../core';
// const reg = /\[(.+?)\]/g;

const BUTTON_HOST_ATTRIBUTES = [
  'fan-btn',          // 基本按钮 突出 + 阴影
  'fan-dashed-btn',   // 虚线边框
  'fan-stroke-btn',   // 边框
  'fan-text-btn',     // 文字
  'fan-spring',       // 弹跳效果
];
const BUTTON_HOST_SIZES = [
  'mini',       // 小
  'common',     // 普通
  'medium',     // 中等
  'large',      // 巨大
  'block',      // 块级 100%
];
export class FanBtnBase {
  constructor(public _elementRef: ElementRef) {}
}
export const _FanBtnMixinBase: OwnDisableCtor & OwnColorCtor & typeof FanBtnBase =
                              MixinColor(MixinDisabled(FanBtnBase));

@Component({
  // moduleId: module.id,
  // tslint:disable-next-line:max-line-length
  selector: ` button[fan-btn],
              button[fan-dashed-btn],
              button[fan-stroke-btn],
              button[fan-text-btn]
            `,
  // exportAs: 'fanButton',
  templateUrl: 'button.html',
  styleUrls: ['button.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[disabled]': 'disabled || null',
    // '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
  },
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['disabled', 'disableRipple', 'color'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FanButton extends _FanBtnMixinBase implements OnInit, OwnColor, OwnDisable {

  constructor(elementRef: ElementRef) {
    super(elementRef);
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (elementRef.nativeElement as HTMLElement).classList.add(attr);
      }
    }
    for (const attr of BUTTON_HOST_SIZES) {
      if (this._hasHostAttributes(attr)) {
        (elementRef.nativeElement as HTMLElement).classList.add(`fan-${attr}-btn`);
      }
    }
  }

  ngOnInit() {
    // console.log(this.color, this.disabled);
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
  // moduleId: module.id,
  // tslint:disable-next-line:max-line-length
  selector: ` a[fan-btn],
              a[fan-flat-btn],
              a[fan-stroke-btn],
              a[fan-text-btn]
            `,
  exportAs: 'fanButton, fanAnchor',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    // Note that we ignore the user-specified tabindex when it's disabled for
    // consistency with the `mat-button` applied on native buttons where even
    // though they have an index, they're not tabbable.
    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': 'disabled.toString()',
    '(click)': '_haltDisabledEvents($event)',
    // '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
  },
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['disabled', 'disableRipple', 'color'],
  templateUrl: 'button.html',
  styleUrls: ['button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FanAnchor extends FanButton {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
  _haltDisabledEvents(event: Event) {
    // 禁用按钮不应应用任何操作
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

}
