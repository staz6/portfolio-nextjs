import type { ReactNode } from "react";

export default function SkillsText({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 mb-2.5 p-0 text-sm leading-[18px] text-white">
      {children}
    </p>
  );
}
