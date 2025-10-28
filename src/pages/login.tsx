import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import type { zodErrorType } from "@/types/zod-error";
import type { loginValidator } from "@/validators/auth.validator";
import { useState } from "react";
import type z from "zod";

export default function LoginPage() {
  const { Login } = useAuth();
  const [data, setData] = useState<z.infer<typeof loginValidator>>({
    password: "",
    username: "",
  });
  const [error, setError] = useState<zodErrorType<typeof loginValidator>>();
  const loginHandler = () => {
    setError(undefined);
    const loginRepsonse = Login(data);
    if (!loginRepsonse) return;
    setError(loginRepsonse);
  };
  return (
    <>
      <Button onClick={loginHandler}>Login</Button>
    </>
  );
}
