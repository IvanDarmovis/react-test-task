import { Navigate, Outlet } from "react-router-dom";

const PrivatePath = ({ isLoggedIn, redirectPath }) => {
  if (!isLoggedIn) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
};

const OnlyPublicPath = ({ isLoggedIn, redirectPath }) => {
  if (isLoggedIn) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
};

export { PrivatePath, OnlyPublicPath };
