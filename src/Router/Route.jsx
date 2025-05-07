import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Components/Login/Login.jsx";
import Signup from "../Components/Signup/Signup.jsx";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute.jsx";
import EventDetails from "../Components/EventDetails/EventDetails.jsx";
import Profile from "../Pages/Profile/Profile.jsx";
import Organize from "../Components/Organize/Organize.jsx";
import ForgetPassword from "../Components/ForgetPassword/ForgetPassword.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/event/:eventId",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/organize",
        element: (
          <PrivateRoute>
            <Organize></Organize>
          </PrivateRoute>
        ),
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
