import { Container } from "../../shared/Container/Container";
import { AlertBadge } from "./components/AlertBadge/AlertBadge";

export default function HomePage(){
  return(
    <div className="
      min-h-screen bg-linear-to-b from-linear-black
    to-linear-gray from-10%">

      <div className="flex justify-center py-16">
        <AlertBadge />
      </div>
      
        <Container>
          <div></div>
        </Container>
      </div>
  );
}