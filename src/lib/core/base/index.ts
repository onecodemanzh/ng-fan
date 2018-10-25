/* *
    按钮 input 等 的6种外观
*/
export const FacadeStatus = ['primary', 'info', 'success', 'danger', 'warning', 'error', 'accent'];

/* *
    UI库 前缀
*/
export const Prefix = 'fan';
/* *
    计算并返回组件选择器
*/
export function GetComponentSelect(component: string): string {
    const attrs: string[] = GetAttrs(component);
    // const cssClass: string[] = getCssClass(component);
    return attrs.join(',');
}
/* *
    计算并返回组件attr选择器
*/
export function GetAttrs(component: string): string[] {
    return FacadeStatus.map(status => `${component}[${Prefix}-${status}-${component}]`);
}
/* *
    计算并返回组件class选择器
*/
export function GetCssClass(component: string): string[] {
    return FacadeStatus.map(status => `${component}[${Prefix}-${status}-${component}]`);
}


