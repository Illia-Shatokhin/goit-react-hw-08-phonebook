import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/auth/authSelectors';

export const PrivateRoute = () => {
  const authentificated = useSelector(selectAuthentificated);
  return <div>PrivateRoute</div>;
};
