/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RematchRootState } from '@rematch/core';
import Login from '../pages/authentication/Login';
import Dashboard from '../pages/home/Dashboard';
import ProtectedRoute, { ProtectedRouteProps } from './ProtectedRoute';
import { models } from '../redux/models';
import PublicRoute from './PublicRoute';
import Users from '../pages/users/Index';

function AppRoutes() {
  const { isAuthenticated } = useSelector(
    (state: RematchRootState<typeof models>) => state.auth
  );

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated,
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Dashboard />}
            />
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Users />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute {...defaultProtectedRouteProps} outlet={<Login />} />
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
