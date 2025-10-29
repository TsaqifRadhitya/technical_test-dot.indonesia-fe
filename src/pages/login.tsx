import { useState } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
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

  const loginHandler = (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(undefined);
    const loginResponse = Login(data);
    if (!loginResponse) {
      navigate("/");
    } else {
      setError(loginResponse);
    }
  };

  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <Card className="w-full max-w-sm shadow-xl border-0 backdrop-blur-lg bg-white/80">
          <form onSubmit={loginHandler}>
            <CardHeader className="text-center space-y-1">
              <CardTitle className="text-3xl font-bold text-primary">
                Welcome Back
              </CardTitle>
              <motion.p
                className="text-muted-foreground text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Please login to continue
              </motion.p>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 mt-5">
              {[
                {
                  id: "username",
                  label: "Username",
                  icon: User,
                  type: "text",
                  value: data.username,
                  placeholder: "Enter your username",
                  error: error?.username,
                  onChange: (v: string) =>
                    setData((prev) => ({ ...prev, username: v })),
                },
                {
                  id: "password",
                  label: "Password",
                  icon: Lock,
                  type: "password",
                  value: data.password,
                  placeholder: "Enter your password",
                  error: error?.password,
                  onChange: (v: string) =>
                    setData((prev) => ({ ...prev, password: v })),
                },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="flex flex-col gap-1"
                >
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <div className="relative">
                    <field.icon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id={field.id}
                      type={field.type}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      placeholder={field.placeholder}
                      className="pl-9"
                    />
                  </div>
                  <AnimatePresence mode="wait">
                    {field.error && (
                      <motion.div
                        key={field.id + "-error"}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <Label className="text-destructive text-sm">
                          {field.error}
                        </Label>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </CardContent>
            <CardFooter className="flex flex-col gap-2 mt-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                className="w-full"
              >
                <Button
                  type="submit"
                  className="w-full font-semibold text-base transition-all hover:scale-[1.02] active:scale-95"
                >
                  Login
                </Button>
              </motion.div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </motion.div>
  );
}
