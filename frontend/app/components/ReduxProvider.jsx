'use client';

import { Provider } from 'react-redux';
import userStore from '../store/store';

const ReduxProvider = ({ children }) => {
  return <Provider store={userStore}>{children}</Provider>;
};

export default ReduxProvider;
