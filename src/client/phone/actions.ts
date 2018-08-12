import { createStandardAction } from 'typesafe-actions';
import { Phone } from '../../model';
import { FETCH_PHONES, FETCH_PHONES_FULFILLED } from './constants';

export const fetchPhones = createStandardAction(FETCH_PHONES)<void>();
export const fetchPhonesFulfilled = createStandardAction(FETCH_PHONES_FULFILLED)<Phone[]>();
