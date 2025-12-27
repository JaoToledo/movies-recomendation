import { ContainerProps } from "./types"
import clsx from "clsx"

export function Container({children, className = ""}: ContainerProps) {
  return (
    <div className={clsx("bg-white/95 rounded-2xl max-w-[1065px] w-full ", className)}>
      {children}
    </div>
  )
}