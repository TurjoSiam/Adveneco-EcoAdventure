import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout';
import Home from './Routes/Home';
import Profile from './Routes/Profile';
import UpdateProfile from './Routes/UpdateProfile';
import Login from './Routes/Login';
import AuthProvider from './Provider/AuthProvider';
import Register from './Routes/Register';
import PrivateRoute from './Routes/PrivateRoute';
import ErrorPage from './LayoutComponents/ErrorPage';
import AdventureDetails from './Routes/AdventureDetails';
import { ToastContainer } from 'react-toastify';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/updateprofile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "/adventuredetails/:adventureId",
        element: <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
