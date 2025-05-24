import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  console.log("PRIVATE ROUTE LOGIK");
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("You need to be authorized");
    }
  }, [isLoggedIn]);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default PrivateRoute;
