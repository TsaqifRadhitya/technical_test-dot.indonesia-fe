import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import type { zodErrorType } from "@/types/zod-error";
import type { loginValidator } from "@/validators/auth.validator";
import { useState } from "react";
import type z from "zod";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const { Login } = useAuth();
  const [data, setData] = useState<z.infer<typeof loginValidator>>({
    password: "",
    username: "",
  });
  const [error, setError] = useState<zodErrorType<typeof loginValidator>>();
  const navigate = useNavigate();

  const loginHandler = () => {
    setError(undefined);
    const loginRepsonse = Login(data);
    if (!loginRepsonse) {
      navigate("/");
    } else {
      setError(loginRepsonse);
    }
  };
  return (
    <div className="w-full min-h-screen flex px-10 lg:px-32 flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-bold text-primary text-center">
              Login
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-col flex gap-2.5">
          <div className="flex flex-col gap-y-1">
            <Label>Username</Label>
            <Input
              value={data.username}
              onChange={(e) =>
                setData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            {error?.username && (
              <Label className="text-destructive">{error.username}</Label>
            )}
          </div>
          <div className="flex flex-col gap-y-1">
            <Label>Login</Label>
            <Input
              value={data.password}
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            {error?.password && (
              <Label className="text-destructive">{error.password}</Label>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={loginHandler}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
