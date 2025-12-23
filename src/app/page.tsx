import { Highlight } from "@/components/Highlight/Highlight";
import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'Home - Tudo sobre filmes'
}

export default function Home(){
  return(
    <div className="min-h-screen bg-linear-to-b from-linear-black to-linear-gray from-10%">

      <div className="flex justify-center pt-20">
        <Highlight />
      </div>
    </div>
  );
}