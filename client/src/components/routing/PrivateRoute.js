import React, { useContext } from "react";
import { Route, useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ redirect, element }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  const navigate = useNavigate();
  return (
        !isAuthenticated && !loading ? (
         <Navigate to={redirect} />
        ) : element
  );
};

export default PrivateRoute;
