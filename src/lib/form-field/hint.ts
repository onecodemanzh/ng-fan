import {Directive, Input} from '@angular/core';


let nextUniqueId = 0;


@Directive({
  selector: 'fan-hint',
  host: {
    'class': 'fan-hint',
    '[class.fan-right]': 'align == "end"',
    '[attr.id]': 'id',
    '[attr.align]': 'null',
  }
})
export class FanHint {
  @Input() align: 'start' | 'end' = 'start';

  @Input() id = `fan-hint-${nextUniqueId++}`;
}
