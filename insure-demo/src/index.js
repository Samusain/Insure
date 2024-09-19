import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error from './Components/Error/Error'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Login from './Components/Account/Login/Login'
import Register from './Components/Account/Register/Register'
import Theme from './Components/Theme/Theme'
import Dashboard from './Components/Dashboard/Dashboard'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import PrivateRouteProfile from './Components/PrivateRouteProfile/PrivateRouteProfile';

const router1 = createBrowserRouter([
  {
    path: "/insure",
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
    path: "/theme",
    element: <Theme/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/dashboard",
    element: <PrivateRouteProfile><Dashboard/></PrivateRouteProfile>
  }
  // {
  //   path: "/dashboard",
  //   element: <Dashboard/>
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router1} />
      {/* <App/> */}
    </RecoilRoot>
  </React.StrictMode>
);

