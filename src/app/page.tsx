import HomePage from "@/features/home/HomePage";
import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'Home - Tudo sobre filmes'
}

export default function Home(){
  return(
    <main>
      <HomePage />
    </main>
  );
}