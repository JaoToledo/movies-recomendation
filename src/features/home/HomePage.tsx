import { Highlight } from "./components/Highlight/Highlight";

export default function HomePage(){
  return(
    <div className="min-h-screen bg-linear-to-b from-linear-black to-linear-gray from-10%">

      <div className="flex justify-center pt-24">
        <Highlight />
      </div>
    </div>
  );
}