import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import { Phone } from '../../model';

import * as phoneActions from './actions';
import { FETCH_PHONES, FETCH_PHONES_FULFILLED } from './constants';

export type PhoneActionType = ActionType<typeof phoneActions>;

export interface IPhoneState {
  readonly list: Phone[];
  readonly isPhonesLoading: boolean;
}

const phonesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PHONES_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

const isPhonesLoadingReducer = (state = false, { type }) => {
  switch (type) {
    case FETCH_PHONES:
      return true;
    case FETCH_PHONES_FULFILLED:
      return false;
    default:
      return state;
  }
};

export default combineReducers<IPhoneState, PhoneActionType>({
  list: phonesReducer,
  isPhonesLoading: isPhonesLoadingReducer,
});
