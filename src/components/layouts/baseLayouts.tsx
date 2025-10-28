import type { ReactNode } from "react";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen w-screen bg-white bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 bg-fixed">{children}</div>;
}
