import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import BaseLayout from "./baseLayouts";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "./components/Navbar";

export default function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null;
  }

  return (
    <BaseLayout key={location.pathname}>
      <Navbar withCredential/>
      <Outlet />
    </BaseLayout>
  );
}
