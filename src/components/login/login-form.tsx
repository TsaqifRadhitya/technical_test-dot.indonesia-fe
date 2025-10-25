import { useState } from "react";
import type { zodErrorType } from "../../types/zod-error";
import type { loginValidator } from "../../validators/auth.validator";
import { useAuth } from "../../hooks/useAuth";
import type z from "zod";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [error, setError] = useState<zodErrorType<typeof loginValidator>>();
  const navigate = useNavigate();
  const [data, setData] = useState<z.infer<typeof loginValidator>>({
    password: "",
    username: "",
  });
  const { Login } = useAuth();

  const handleLogin = () => {
    const error = Login(data);
    if (error) {
      setError(error);
      return;
    }
    navigate("/");
  };

  return <form action={handleLogin}>
  </form>;
}
