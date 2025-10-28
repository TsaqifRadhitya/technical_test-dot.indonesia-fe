import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const getIntialProfileName = (name : string) : string =>{
    if(name === "") return name
    console.log(name)
    const splittedChar = name.split(" ")
    if(splittedChar.length > 1){
        return [splittedChar[0][0],splittedChar[1][0]].join("")
    }
    return [splittedChar[0][0],splittedChar[0][1]].join("")
}

const Profile = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { Credential, Logout } = useAuth();

  const isScrolled = true;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    if (Logout()) {
      navigate("/login");
      setOpen(false);
      return;
    }
  };

  return (
    <div ref={ref} className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onPointerEnter={() => setOpen(true)}
        onClick={() => setOpen(!open)}
      >
        <h1
          className={cn(
            "flex items-center justify-center ring ring-blue-500 bg-white text-sm h-10 aspect-square rounded-full leading-none font-semibold text-blue-600",
            isScrolled && "bg-blue-500 text-white"
          )}
        >
          {getIntialProfileName(Credential as string)}
        </h1>
        <p
          className={cn(
            "text-white font-medium",
            isScrolled && "text-blue-500"
          )}
        >
          {Credential || "User123"}
        </p>
      </div>

      {open && (
        <div className="absolute -right-5 lg:-right-auto lg:left-0 mt-2 w-44 rounded bg-white shadow-lg animate-fade-in pt-5 pb-2.5">
          <div className="w-full h-px bg-gray-300 my-1"></div>
          <ul className="flex flex-col text-sm text-gray-500">
            <li>
              <Button
                onClick={handleLogout}
                variant={"destructive"}
                className="px-4 py-2 bg-white rounded-none  hover:text-white text-destructive cursor-pointer w-full"
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
    <nav className="w-full absolute top-0 shadow px-10 lg:px-32 py-3 bg-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-blue-500 text-2.5xl">ANY</span>Quiz
      </h1>
      {withCredential && <Profile />}
    </nav>
  );
}
