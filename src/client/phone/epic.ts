import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchPhonesFulfilled } from './actions';
import { FETCH_PHONES } from './constants';
import { getPhones } from './endpoints';

const fetchPhonesEpic = action$ => action$.pipe(
  ofType(FETCH_PHONES),
  mergeMap(action => from(getPhones()).pipe(
    map(phones => fetchPhonesFulfilled(phones)),
  )),
);

export default fetchPhonesEpic;
