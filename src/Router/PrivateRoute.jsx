import React from "react";
import { use } from "react";
import AuthContext from "../Contexts/Auth/AuthContext";
import { useLocation } from "react-router";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {

  const locationOfThePrivateRoute = useLocation();
  const userInfo = use(AuthContext);
  const { user, isLoadingDone } = userInfo;

  if (isLoadingDone === false) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        state={locationOfThePrivateRoute?.pathname}
        to={`/login`}
      ></Navigate>
    );
  } else {
    return children;
  }
};

export default PrivateRoute;
