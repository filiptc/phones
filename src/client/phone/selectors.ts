import { Phone } from '../../model';
import { IPhoneState } from './reducer';

export function getPhones(state: IPhoneState): Phone[] {
  return state.list;
}

export function getIsPhonesLoading(state: IPhoneState): boolean {
  return state.isPhonesLoading;
}
