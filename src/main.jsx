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
import ForgetPassword from './Routes/ForgetPassword';
import DynamicTitle from './DynamicTitle/DynamicTitle';
import AboutUs from './Routes/AboutUs';
import ContactUs from './Routes/ContactUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <>
          <DynamicTitle title="Adveneco | Home"></DynamicTitle>
          <Home></Home>
        </>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/aboutus",
        element: <>
          <DynamicTitle title="Adveneco | About us"></DynamicTitle>
          <AboutUs></AboutUs>
        </>
      },
      {
        path: "/contactus",
        element: <>
          <DynamicTitle title="Adveneco | Contact us"></DynamicTitle>
          <ContactUs></ContactUs>
        </>
      },
      {
        path: "/profile",
        element: <>
          <DynamicTitle title="Adveneco | Profile"></DynamicTitle>
          <PrivateRoute><Profile></Profile></PrivateRoute>
        </>
      },
      {
        path: "/updateprofile",
        element: <>
          <DynamicTitle title="Adveneco | Update Profile"></DynamicTitle>
          <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        </>
      },
      {
        path: "/adventuredetails/:adventureId",
        element: <>
          <DynamicTitle title="Adveneco | Adventure Details"></DynamicTitle>
          <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>
        </>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/login",
        element: <>
          <DynamicTitle title="Adveneco | Login"></DynamicTitle>
          <Login></Login>
        </>
      },
      {
        path: "/register",
        element: <>
          <DynamicTitle title="Adveneco | Register"></DynamicTitle>
          <Register></Register>
        </>
      },
      {
        path: "/forgetpassword",
        element: <>
          <DynamicTitle title="Adveneco | Reset Password"></DynamicTitle>
          <ForgetPassword></ForgetPassword>
        </>
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
