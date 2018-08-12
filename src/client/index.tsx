import React, { ReactType } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PhoneListContainer from './phone/containers/phoneListContainer/phoneListContainer';
import configureStore from './store';

import './index.less';

const render = (Component: ReactType) => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
  document.getElementById('root'),
);
};

render(PhoneListContainer);
