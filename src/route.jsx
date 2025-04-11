import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './layouts/platformAdmin';
// import AuthPage from './pages/auth/auth.jsx';
import Dashboard from './pages/platformadmin/dashboard';
import Colleges from './pages/platformadmin/colleges';
import Admin from './pages/platformadmin/admin';
import Setting from './pages/platformadmin/setting';
import Report from './pages/platformadmin/report';

const AppRoute = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'colleges',
        element: <Colleges />
      },
      {
        path: 'admin',
        element: <Admin />
      },
      {
        path: 'setting',
        element: <Setting />
      },
      {
        path: 'reports',
        element: <Report />
      }
    ]
  }

]);

export default AppRoute;
