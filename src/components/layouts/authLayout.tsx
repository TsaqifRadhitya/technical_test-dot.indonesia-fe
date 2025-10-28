import { useEffect, useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import BaseLayout from "./baseLayouts";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "./components/Navbar";

export default function AuthLayout() {
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) return;
    navigate("/login");
  }, []);

  if (isAuth) {
    return (
      <BaseLayout>
        <Navbar withCredential />
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
