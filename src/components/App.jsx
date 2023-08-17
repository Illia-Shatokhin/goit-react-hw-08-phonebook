import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/authOperations';
import { selectAuthentificated, selectToken } from 'redux/auth/authSelectors';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [authentificated, token, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
