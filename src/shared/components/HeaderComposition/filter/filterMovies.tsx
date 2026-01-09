import { Filter } from "lucide-react";
import { FilterMoviesProps } from "./types";
import clsx from "clsx";


export function FilterMovies({className = ""}: FilterMoviesProps) {
  return (
    <div className={clsx("",className)}>
      <button className="flex cursor-pointer">
        <Filter color="white" />
      </button>
    </div>
  )
}