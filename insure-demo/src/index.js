import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error from './Components/Error/Error'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Login from './Components/Account/Login/Login'
import Register from './Components/Account/Register/Register'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/insure/",
    element: <App/>
  },
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/*",
    element: <Error/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

