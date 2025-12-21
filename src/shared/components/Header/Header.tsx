/**
 * Componente Header
 * @returns {JSX.Element} Header global da página
 */

import { SearchBar } from "@/features/components/SearchBar/SearchBar";


export function Header() {
  return (
    <div 
    data-testid="header"
    className="bg-header-bg py-5"
    >
      <div className="flex justify-center ">
        <SearchBar />
      </div>
    </div>
  )
} 