import { combineEpics } from 'redux-observable';

import phone from '../phone/epic';

export default combineEpics(phone);
