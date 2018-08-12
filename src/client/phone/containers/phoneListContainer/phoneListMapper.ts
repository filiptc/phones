import { Phone } from '../../../../model';
import { IRootState } from '../../../store/rootReducer';
import { fetchPhones } from '../../actions';
import { getIsPhonesLoading, getPhones } from '../../selectors';

export interface IMappedPhoneListProps {
  phones: Phone[];
  isPhonesLoading: boolean;
}

export interface IMappedPhoneListActions {
  fetchPhones: () => void;
}

export function mapStateToProps(state: IRootState): IMappedPhoneListProps {
  return {
    phones: getPhones(state.phone),
    isPhonesLoading: getIsPhonesLoading(state.phone),
  };
}

export const mapDispatchToProps: IMappedPhoneListActions = { fetchPhones };
