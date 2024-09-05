import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export function AdminRoute({ children }) {
  const { user } = useContext(UserContext);

  // If user is not an admin, redirect to homepage
  if (!user || !user.isAdmin) {
    return <Navigate to="/" />;
  }

  // If the user is an admin, allow access
  return children;
}
