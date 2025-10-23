import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import BaseLayout from "./baseLayouts";

export default function GuestLayout() {
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) return;
    navigate("/login");
  }, [isAuth]);

  if (!isAuth) {
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
