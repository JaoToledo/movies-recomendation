import { Container } from "@/shared/components/Container/Container";
import { AlertBadge } from "./components/AlertBadge/AlertBadge";

export default function HomePage(){
  return(
    <div className="min-h-screen bg-linear-to-b from-linear-black to-linear-gray from-10%">

      <div className="flex justify-center py-16">
        <AlertBadge />
      </div>

      <div className="flex justify-center">
        <Container className="p-[75px]">
          <div></div>
        </Container>
      </div>

    </div>
  );
}