import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import RequireAuth from '../hooks/RequireAuth';
import Login from '../pages/authentication/Login';
import Dashboard from '../pages/home/Dashboard';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
