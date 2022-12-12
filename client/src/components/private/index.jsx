import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  if (token) {
    return children;
  }
  return <Navigate to="/auth/login" />;
};