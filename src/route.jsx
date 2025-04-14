import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/layout';
// import AuthPage from './pages/auth/auth.jsx';
import Dashboard from './pages/platformadmin/dashboard';
import Colleges from './pages/platformadmin/colleges';
import Admin from './pages/platformadmin/admin';
import Setting from './pages/platformadmin/setting';
import Report from './pages/platformadmin/report';
import StudentDashboard from './pages/student/dashboard';
import Navbar from './components/ui/navbar/platformAdmin';
import Sidebar from './components/ui/sidebar';

const AppRoute = createBrowserRouter([
  {
    path: '/',
    element: <Layout Navbar={<Navbar />} Sidebar={<Sidebar />}/>,
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
  },
  {
    path: '/s/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <StudentDashboard />
      },

    ]
  }

]);

export default AppRoute;
