import { Outlet, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useLayoutEffect } from "react";
import BaseLayout from "./baseLayouts";
import Navbar from "./components/Navbar";

export default function GuestLayout() {
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  const location = useLocation();

  useEffect(() => {
    if (isAuth){
      navigate("/");
    }
  }, []);

  if (!isAuth) {
    return (
      <BaseLayout key={location.pathname}>
        <Navbar />
        <Outlet />
      </BaseLayout>
    );
  }
  return (
    <BaseLayout>
      <></>
    </BaseLayout>
  );
}
