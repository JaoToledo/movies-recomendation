import { ContainerProps } from "./types"
import clsx from "clsx"

export function Container({children, className = ""}: ContainerProps) {
  return (
    <div className={clsx("bg-white rounded-2xl shadow-lg max-w-[1065px] min-h-screen w-full ", className)}>
      {children}
    </div>
  )
}