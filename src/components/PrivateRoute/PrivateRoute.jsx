import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/auth/authSelectors';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authentificated = useSelector(selectAuthentificated);
  return authentificated ? children : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};
