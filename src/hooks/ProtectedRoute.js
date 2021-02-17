import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import {useUser} from "./useUser";

const ProtectedRoute = ({ isLogin, path, children, ...props}) => {
  const { pathname } = useLocation();
  const { loading } = useUser();

  return isLogin || !loading
    ? <Route path={path} { ...props }>{children}</Route>
    : <Redirect to="/"/>
};

export default ProtectedRoute;
