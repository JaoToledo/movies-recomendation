import { Metadata } from "next"
import { Typography } from "@/components/typography/Typography"

export const metadata: Metadata = {
  title: 'Home - Tudo sobre filmes'
}

export default function Home(){
  return(
    <div className="flex flex-col gap-30">
      <Typography variant="H1"> Fonte Poppins </Typography>
    </div>
  )
}