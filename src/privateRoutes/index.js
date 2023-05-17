import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export default function PrivateRoutes({ children }) {
  const { userTD } = useContext(AuthContext);
  return userTD ? children : <Navigate to="/login" />;
}
