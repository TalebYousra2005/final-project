//* this is the private route

import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return children;
  }
  return <Navigate to="/auth/sign" />;
};