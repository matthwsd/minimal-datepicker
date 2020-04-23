import { BaseElement } from './BaseElement';

export interface CustomHeader extends BaseElement {
    caret?: BaseElement;
    month?: BaseElement;
    year?: BaseElement;
    day?: BaseElement;
}