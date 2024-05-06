import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './pages/home/home.jsx';
import Overview from './pages/overview/overview.jsx';
import Contact from './pages/contact/contact.jsx';
import Login from './pages/login/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "*",
    element: <div>Page Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
