import { Typography } from "@/shared/components/Typography/Typography";

interface CategoryMovieTitleProps {
  children: string; 
}

export function CategoryMovieTitle({ children }: CategoryMovieTitleProps){
  return (
      <Typography 
        variant="H1" 
        className="font-bold text-white"
      >
        {children}
      </Typography>
  )
}