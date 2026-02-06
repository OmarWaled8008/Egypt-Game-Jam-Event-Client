import React from "react";
import { Navigate } from "react-router";

export default function Protectedroute({ children }) {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
