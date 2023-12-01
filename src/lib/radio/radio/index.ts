import { defineCustomElement } from '@tylertech/forge-core';

import { RadioComponent } from './radio';

export * from './radio-adapter';
export * from './radio-constants';
export * from './radio-foundation';
export * from './radio';

export function defineRadioComponent(): void {
  defineCustomElement(RadioComponent);
}
