import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[align-self-start], [align-self-end], [align-self-center], [align-self-stretch], [align-self-baseline], [align-self-auto], [wrap-reverse], [justify-content-start], [justify-content-center], [justify-content-end], [justify-content-around], [justify-content-between], [justify-content-evenly], [align-items-start], [align-items-center], [align-items-end], [align-items-stretch], [align-items-baseline], [float-left], [float-right], [float-start], [float-end], [float-sm-left], [float-sm-right], [float-sm-start], [float-sm-end], [float-md-left], [float-md-right], [float-md-start], [float-md-end], [float-lg-left], [float-lg-right], [float-lg-start], [float-lg-end], [float-xl-left], [float-xl-right], [float-xl-start], [float-xl-end], [text-center], [text-justify], [text-start], [text-end], [text-left], [text-right], [text-nowrap], [text-wrap], [text-sm-center], [text-sm-justify], [text-sm-start], [text-sm-end], [text-sm-left], [text-sm-right], [text-sm-nowrap], [text-sm-wrap], [text-md-center], [text-md-justify], [text-md-start], [text-md-end], [text-md-left], [text-md-right], [text-md-nowrap], [text-md-wrap], [text-lg-center], [text-lg-justify], [text-lg-start], [text-lg-end], [text-lg-left], [text-lg-right], [text-lg-nowrap], [text-lg-wrap], [text-xl-center], [text-xl-justify], [text-xl-start], [text-xl-end], [text-xl-left], [text-xl-right], [text-xl-nowrap], [text-xl-wrap], [text-uppercase], [text-lowercase], [text-capitalize], [text-sm-uppercase], [text-sm-lowercase], [text-sm-capitalize], [text-md-uppercase], [text-md-lowercase], [text-md-capitalize], [text-lg-uppercase], [text-lg-lowercase], [text-lg-capitalize], [text-xl-uppercase], [text-xl-lowercase], [text-xl-capitalize], [no-padding], [padding], [padding-top], [padding-bottom], [padding-start], [padding-end], [padding-vertical], [padding-horizontal], [no-margin], [margin], [margin-top], [margin-bottom], [margin-start], [margin-end], [margin-vertical], [margin-horizontal]',
})
export class CssUtilsDeprecations {
  constructor(ref: ElementRef) {
    const el = (ref.nativeElement as HTMLElement);
    const attributes = Array.from(el.attributes)
      .map(a => a.name)
      .filter(n => DEPRECATED_ATTRIBUTES.includes(n));

    if (attributes.length > 0) {
      console.warn(`[DEPRECATED][CSS] Ionic CSS attributes are deprecated.
Replace:
'<${el.tagName.toLowerCase()} ${attributes.map(n => `${n}`).join(' ')}>'

With:
'<${el.tagName.toLowerCase()} class="${attributes.map(n => `ion-${n}`).join(' ')}">'
      `);
    }
  }
}
const DEPRECATED_ATTRIBUTES = [
  'align-self-start',
  'align-self-end',
  'align-self-center',
  'align-self-stretch',
  'align-self-baseline',
  'align-self-auto',
  'wrap-reverse',
  'justify-content-start',
  'justify-content-center',
  'justify-content-end',
  'justify-content-around',
  'justify-content-between',
  'justify-content-evenly',
  'align-items-start',
  'align-items-center',
  'align-items-end',
  'align-items-stretch',
  'align-items-baseline',
  'float-left',
  'float-right',
  'float-start',
  'float-end',
  'float-sm-left',
  'float-sm-right',
  'float-sm-start',
  'float-sm-end',
  'float-md-left',
  'float-md-right',
  'float-md-start',
  'float-md-end',
  'float-lg-left',
  'float-lg-right',
  'float-lg-start',
  'float-lg-end',
  'float-xl-left',
  'float-xl-right',
  'float-xl-start',
  'float-xl-end',
  'text-center',
  'text-justify',
  'text-start',
  'text-end',
  'text-left',
  'text-right',
  'text-nowrap',
  'text-wrap',
  'text-sm-center',
  'text-sm-justify',
  'text-sm-start',
  'text-sm-end',
  'text-sm-left',
  'text-sm-right',
  'text-sm-nowrap',
  'text-sm-wrap',
  'text-md-center',
  'text-md-justify',
  'text-md-start',
  'text-md-end',
  'text-md-left',
  'text-md-right',
  'text-md-nowrap',
  'text-md-wrap',
  'text-lg-center',
  'text-lg-justify',
  'text-lg-start',
  'text-lg-end',
  'text-lg-left',
  'text-lg-right',
  'text-lg-nowrap',
  'text-lg-wrap',
  'text-xl-center',
  'text-xl-justify',
  'text-xl-start',
  'text-xl-end',
  'text-xl-left',
  'text-xl-right',
  'text-xl-nowrap',
  'text-xl-wrap',
  'text-uppercase',
  'text-lowercase',
  'text-capitalize',
  'text-sm-uppercase',
  'text-sm-lowercase',
  'text-sm-capitalize',
  'text-md-uppercase',
  'text-md-lowercase',
  'text-md-capitalize',
  'text-lg-uppercase',
  'text-lg-lowercase',
  'text-lg-capitalize',
  'text-xl-uppercase',
  'text-xl-lowercase',
  'text-xl-capitalize',
  'no-padding',
  'padding',
  'padding-top',
  'padding-bottom',
  'padding-start',
  'padding-end',
  'padding-vertical',
  'padding-horizontal',
  'no-margin',
  'margin',
  'margin-top',
  'margin-bottom',
  'margin-start',
  'margin-end',
  'margin-vertical',
  'margin-horizontal'
];
