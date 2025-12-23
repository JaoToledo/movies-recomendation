import { Typography } from "@/shared/components/Typography/Typography";

export function Highlight(){
  return (
    <div className="bg-yellow-alert shadow-[0_0_14px] shadow-yellow-alert/50 rounded-[20px] px-2 h-18 flex justify-center items-center">
      <Typography variant="H1" className="font-black">
        EM ALTA
      </Typography>
    </div>
  )
}