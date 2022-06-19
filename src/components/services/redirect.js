import { Navigate, Outlet } from "react-router-dom";
import i18n from "i18n";

const PrivatePath = ({
  isLoggedIn,
  redirectPath = `/${i18n.language}/signin`
}) => {
  if (!isLoggedIn) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
};

const OnlyPublicPath = ({ isLoggedIn, redirectPath = `/${i18n.language}` }) => {
  if (isLoggedIn) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
};

export { PrivatePath, OnlyPublicPath };
