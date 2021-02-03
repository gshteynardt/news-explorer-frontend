import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLogin, path, children }) => (isLogin ? <Route path={path}>{children}</Route> : <Redirect to="/" />);

export default ProtectedRoute;
