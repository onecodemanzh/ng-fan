import {Constructor} from './constructor';

/** @docs-private */
export interface OwnDisable {
  /** Whether the component is disabled. */
  disabled: boolean;
}

/** @docs-private */
export type OwnDisableCtor = Constructor<OwnDisable>;

/** Mixin to augment a directive with a `disabled` property. */
export function MixinDisabled<T extends Constructor<{}>>(base: T): OwnDisableCtor & T {
  return class extends base {
    private _disabled = false;

    get disabled() { return this._disabled; }
    set disabled(value: any) { this._disabled = !!value; }

    constructor(...args: any[]) { super(...args); }
  };
}
