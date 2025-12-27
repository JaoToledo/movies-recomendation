import { Typography } from "@/shared/components/Typography/Typography";
import { AlertBadgeProps } from "./types";
import clsx from "clsx";



export function AlertBadge({className = ""}: AlertBadgeProps){
  return (
    <div className={clsx("bg-yellow-alert shadow-[0_0_14px] shadow-yellow-alert/50 rounded-[20px] px-2 h-18 flex justify-center items-center", className)}>

      <Typography variant="H1" className="font-black">
        EM ALTA
      </Typography>
    </div>
  )
}