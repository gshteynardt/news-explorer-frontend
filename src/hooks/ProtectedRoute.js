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

  console.log(isLogin, loading);

  return isLogin || (loading && pathname === '/saved-news')
    ? <Route path={path} { ...rest }>{children}</Route>
    : <Redirect to="/"/>
};

export default ProtectedRoute;
