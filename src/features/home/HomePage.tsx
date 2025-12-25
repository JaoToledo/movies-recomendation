import { Container } from "@/shared/components/Container/Container";
import { Highlight } from "./components/Highlight/Highlight";

export default function HomePage(){
  return(
    <div className="min-h-screen bg-linear-to-b from-linear-black to-linear-gray from-10%">

      <div className="flex justify-center py-16">
        <Highlight />
      </div>

      <div className="flex justify-center">
        <Container className="p-[75px]">
          <div></div>
        </Container>
      </div>

    </div>
  );
}