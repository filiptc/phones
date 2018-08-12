import { combineReducers } from 'redux';

import phoneReducer, { IPhoneState } from '../phone/reducer';


export interface IRootState {
  readonly phone: IPhoneState;
}

const rootReducer = combineReducers<IRootState>({
  phone: phoneReducer,
});

export default rootReducer;
