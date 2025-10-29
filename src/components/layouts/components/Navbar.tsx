import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useQuizz } from "@/hooks/useQuestion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import AnyQuizIcon from "../../../assets/Any Quiz Icon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { LogOutIcon } from "lucide-react";

const getIntialProfileName = (name: string): string => {
  if (name === "") return name;
  const splittedChar = name.split(" ");
  if (splittedChar.length > 1) {
    return [splittedChar[0][0], splittedChar[1][0]].join("");
  }
  return [splittedChar[0][0], splittedChar[0][1]].join("");
};

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { Credential, Logout } = useAuth();
  const { reset } = useQuizz();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    if (Logout()) {
      reset();
      navigate("/login");
      setOpen(false);
    }
  };

  return (
    <div ref={ref} className="relative text-lg select-none">
      <div
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <motion.div
          className={cn(
            "flex items-center justify-center h-10 w-10 rounded-full font-semibold ring-2 ring-primary/40 bg-primary text-white shadow-sm transition-transform"
          )}
          whileTap={{ scale: 0.95 }}
        >
          {getIntialProfileName(Credential as string).toLocaleUpperCase()}
        </motion.div>

        <motion.p
          className={cn(
            "hidden lg:block font-medium text-gray-700 group-hover:text-primary transition-colors"
          )}
        >
          {Credential}
        </motion.p>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className={cn(
              "absolute mt-3 rounded-xl border border-gray-100 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden z-50",
              "-right-2 lg:left-0 lg:-right-auto"
            )}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-700">
                {Credential}
              </p>
              <p className="text-xs text-gray-400">Logged in</p>
            </div>
            <ul className="text-sm">
              <li>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="w-full rounded-none justify-start px-4 py-3 text-destructive hover:bg-destructive/10 hover:text-destructive transition"
                >
                  <LogOutIcon /> Logout
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar({
  withCredential = false,
}: {
  withCredential?: boolean;
}) {
  return (
    <nav className="w-full fixed top-0 shadow px-10 lg:px-32 py-2.5 bg-white flex justify-between items-center z-[999]">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <img className="max-w-12" src={AnyQuizIcon} />
          <h1 className="text-2xl font-black">Quiz</h1>
        </div>
        {"|"}
        <p className="text-sm text-muted-foreground font-medium">
          Challenge yourself today 🚀
        </p>
      </div>

      {withCredential && <Profile />}
    </nav>
  );
}
