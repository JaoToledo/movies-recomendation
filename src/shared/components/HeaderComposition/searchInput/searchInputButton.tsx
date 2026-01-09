import { Search } from "lucide-react"
import { SearchInputButtonProps } from "./types"

/**
 * Botão de pesquisa do header.
 * @returns {JSX.Element} Botão de pesquisa clicável.
 */

export function SearchInputButton({ onClick}: SearchInputButtonProps) {
  return (
      <button
      onClick={() => {}}
      className="
    bg-light-gray h-8 cursor-pointer px-4 rounded-r-[20px]
      flex justify-center items-center  " 
      >  
        <Search color="white" size={28} className="" />
      </button>
  )

}