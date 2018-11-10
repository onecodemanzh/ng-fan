import { Directive, Input } from '@angular/core';

/* 自增的唯一id */
let nextUniqueId = 0;

@Directive({
  selector: 'fan-error, [fan-error]',
  host: {
    'class': 'fan-error',
    'role': 'alert',
    '[attr.id]': 'id',
  },
})
/* 在表单字段下面显示一条错误消息 */
export class FanError {
  @Input() id = `mat-error-${nextUniqueId++}`;
}
