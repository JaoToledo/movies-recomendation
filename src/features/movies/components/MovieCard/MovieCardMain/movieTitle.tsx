import { Typography } from "@/shared/components/Typography/Typography";
import { TitleProps } from "./interfaces";

export function MovieTitle({children}: TitleProps){
  return (
    <Typography variant="H3">
      {children}
    </Typography>
  )
}