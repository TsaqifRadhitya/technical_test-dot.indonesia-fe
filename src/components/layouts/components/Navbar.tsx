import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useQuizz } from "@/hooks/useQuestion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import AnyQuizIcon from "../../../assets/Any Quiz Icon.svg";

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

  const isScrolled = true;

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
    <div ref={ref} className="relative text-lg">
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onPointerEnter={() => setOpen(true)}
        onClick={() => setOpen(!open)}
      >
        <h1
          className={cn(
            "flex items-center justify-center h-10 text-base aspect-square rounded-full ring ring-blue-500 font-semibold leading-none transition-colors",
            isScrolled ? "bg-blue-500 text-white" : "bg-white text-blue-600"
          )}
        >
          {getIntialProfileName(Credential as string).toLocaleUpperCase()}
        </h1>

        <p
          className={cn(
            "font-medium transition-colors font-semibold",
            isScrolled ? "text-blue-500" : "text-white"
          )}
        >
          {Credential}
        </p>
      </div>
      {open && (
        <div
          className={cn(
            "absolute mt-3.5 w-44 rounded-lg bg-white shadow-lg pt-5 overflow-hidden animate-fade-in",
            "-right-5 lg:left-0 lg:-right-auto"
          )}
        >
          <div className="h-px bg-gray-200 mt-1" />
          <ul className="flex flex-col text-sm text-gray-500">
            <li>
              <Button
                onClick={handleLogout}
                variant="destructive"
                className={cn(
                  "w-full rounded-none px-4 py-2 bg-white text-destructive hover:bg-destructive hover:text-white transition"
                )}
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
      )}
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
        <img className="max-w-12" src={AnyQuizIcon} />
        <h1 className="text-2xl font-black">Quiz</h1>
      </div>
      {withCredential && <Profile />}
    </nav>
  );
}
