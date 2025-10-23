import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import BaseLayout from "./baseLayouts";
import { useAuth } from "../../hooks/useAuth";

export default function AuthLayout() {
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) return;
    navigate("/login");
  }, [isAuth]);

  if (isAuth) {
    return (
      <BaseLayout>
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
