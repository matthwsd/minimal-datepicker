import { BaseElement } from './BaseElement';

export interface CustomInput extends BaseElement {
    font?: { weight?: string, size?: string, family?: string};
}