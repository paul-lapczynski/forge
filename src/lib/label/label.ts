import { CustomElement, FoundationProperty, attachShadowTemplate, coerceBoolean } from '@tylertech/forge-core';
import { BaseComponent, IBaseComponent } from '../core';
import { LabelAdapter } from './label-adapter';
import { LABEL_CONSTANTS } from './label-constants';
import { LabelFoundation } from './label-foundation';

import template from './label.html';
import style from './label.scss';

export interface ILabelComponent extends IBaseComponent {
  for: string | null | undefined;
  forElement: HTMLElement | null | undefined;
  dynamic: boolean;
  update(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-label': ILabelComponent;
  }
}

/**
 * @tag forge-label
 * 
 * @summary The Forge Label component is used to associate a text label with a compatible Forge
 * component.
 * 
 * @property {string | null | undefined} for - The id of the associated element.
 * @property {HTMLElement | null | undefined} forElement - The associated element.
 * @property {boolean} dynamic - Propagates changes in the label's text content to the associated element.
 * 
 * @attribute {string} for - The id of the associated form component.
 * @attribute {boolean} dynamic - Propagates changes in the label's text content to the associated element.
 * 
 * @method update - Updates the targetted element with the label's current text content.
 * 
 * @csspart label - Styles the label's root element.
 */
@CustomElement({
  name: LABEL_CONSTANTS.elementName
})
export class LabelComponent extends BaseComponent implements ILabelComponent {
  public static get observedAttributes(): string[] {
    return [
      LABEL_CONSTANTS.attributes.FOR,
      LABEL_CONSTANTS.attributes.DYNAMIC
    ];
  }

  private _foundation: LabelFoundation;

  constructor() {
    super();
    attachShadowTemplate(this, template, style);
    this._foundation = new LabelFoundation(new LabelAdapter(this));
  }

  public connectedCallback(): void {
    this._foundation.initialize();
  }

  public disconnectedCallback(): void {
    this._foundation.disconnect();
  }

  public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    switch (name) {
      case LABEL_CONSTANTS.attributes.FOR:
        this.for = newValue;
        break;
      case LABEL_CONSTANTS.attributes.DYNAMIC:
        this.dynamic = coerceBoolean(newValue);
        break;
    }
  }

  @FoundationProperty()
  public for: string | null | undefined;

  @FoundationProperty()
  public forElement: HTMLElement | null | undefined;

  @FoundationProperty()
  public dynamic: boolean;

  /**
   * Updates the targetted element with the label's current text content.
   */
  public update(): void {
    this._foundation.update();
  }
}