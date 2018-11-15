import {Observable} from 'rxjs';
import {NgControl} from '@angular/forms';


/** 一种允许控件在`FanFormField`控件内部工作的接口 . */
export abstract class FanFormFieldControl<T> {
  /** 控件的值. */
  value: T | null;

  /**
   * 当控件状态发生变化时发出的流，使父控件' fanFormField '
   * 需要运行变更检测
   */
  readonly stateChanges: Observable<void>;

  /** 此控件的元素ID. */
  readonly id: string;

  /** 此控件的placeholder. */
  readonly placeholder: string;

  /** 获取此控件的NgControl. */
  readonly ngControl: NgControl | null;

  /** 控制是否聚焦focused. */
  readonly focused: boolean;

  /** 控件是否为空. */
  readonly empty: boolean;

  /** 标签是否浮动. */
  readonly shouldLabelFloat: boolean;

  /** 是否必填. */
  readonly required: boolean;

  /** 是否禁用控件. */
  readonly disabled: boolean;

  /** 控件是否处于错误状态. */
  readonly errorState: boolean;

  /**
   * 控件类型的可选名称，可用于区分元素
   * 基于他们的控制类型。表单字段将添加一个类  `fan-form-field-type-{{controlType}}` 到它的根元素.
   */
  readonly controlType?: string;

  /**
   * 输入当前是否处于自动填充状态。如果属性不存在
   * 控制它被认为是错误的
   */
  readonly autofilled?: boolean;

  /** 设置当前描述此控件的元素id列表. */
  abstract setDescribedByIds(ids: string[]): void;

  /** 处理对控件容器的单击. */
  abstract onContainerClick(event: MouseEvent): void;
}
