import { twMerge } from "tailwind-merge";
import { RootProps } from "./interfaces";

export function Root({children, className}: RootProps) {
  return (
    <div className={twMerge("text-white flex flex-col shrink-0  max-w-[250px] gap-3", className)}>
      {children}
    </div>
  )
}