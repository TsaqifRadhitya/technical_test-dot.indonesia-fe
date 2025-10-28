import { useState } from "react";
import { useNavigate } from "react-router";
import { User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import type { zodErrorType } from "@/types/zod-error";
import type { loginValidator } from "@/validators/auth.validator";
import type z from "zod";

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
    const loginResponse = Login(data);
    if (!loginResponse) {
      navigate("/");
    } else {
      setError(loginResponse);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div>
        <Card className="w-[380px] shadow-xl border-0 backdrop-blur-lg bg-white/80">
          <CardHeader className="text-center space-y-1">
            <CardTitle className="text-3xl font-bold text-primary">
              Welcome Back
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Please login to continue
            </p>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  value={data.username}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, username: e.target.value }))
                  }
                  placeholder="Enter your username"
                  className="pl-9"
                />
              </div>
              {error?.username && (
                <Label className="text-destructive text-sm">
                  {error.username}
                </Label>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={data.password}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, password: e.target.value }))
                  }
                  placeholder="Enter your password"
                  className="pl-9"
                />
              </div>
              {error?.password && (
                <Label className="text-destructive text-sm">
                  {error.password}
                </Label>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button
              className="w-full font-semibold text-base transition-all hover:scale-[1.02] active:scale-95"
              onClick={loginHandler}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
