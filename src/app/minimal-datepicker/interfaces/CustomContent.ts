import { BaseElement } from './BaseElement';

export interface CustomContent extends BaseElement {
    weekDay?: BaseElement;
    day?: BaseElement;
    dayNotInSelectedMonth?: BaseElement;
}