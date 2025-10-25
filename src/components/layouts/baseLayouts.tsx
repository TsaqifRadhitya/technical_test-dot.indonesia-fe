import type { ReactNode } from "react";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen w-screen bg-white">{children}</div>;
}
