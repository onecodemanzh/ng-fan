import { ElementRef } from '@angular/core';
import { Constructor } from './constructor';

/* *
    颜色范围
*/
export type ColorPalette = 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'error' | 'accent' | undefined;
export interface OwnColor {
    color: ColorPalette;
}

/** @docs-private */
export type OwnColorCtor = Constructor<OwnColor>;

export interface HasElementRef {
    _elementRef: ElementRef;
}

export function MixinColor<T extends Constructor<HasElementRef>>(
    base: T, defaultColor?: ColorPalette): OwnColorCtor & T {
  return class extends base {
    private _color: ColorPalette;

    get color(): ColorPalette { return this._color; }
    set color(value: ColorPalette) {
      const colorPalette = value || defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`fan-${this._color}`);
        }
        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`fan-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);

      // 设置默认颜色.
      this.color = defaultColor;
    }
  };
}
