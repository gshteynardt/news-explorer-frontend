import React, { useEffect } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import {useUser} from "./useUser";

const ProtectedRoute = (props) => {
  const {
    isLogin,
    path,
    children,
    openPopupLogin,
    ...rest
  } = props;

  const { pathname } = useLocation();
  const { loading } = useUser();

  useEffect(() => {
    if(!isLogin && pathname === '/saved-news') openPopupLogin();
  }, []);

  return  loading || isLogin
    ? <Route path={path} { ...rest }>{children}</Route>
    : <Redirect to="/"/>
};

export default ProtectedRoute;
