/**
 * Componente Header
 * @returns {JSX.Element} Header global da página
 */

import { SearchBar } from "@/features/components/SearchBar/SearchBar";


export function Header() {
  return (
    <div 
    data-testid="header"
    className="flex justify-center bg-header-bg py-5 px-[280px] "
    >
      <SearchBar />
    </div>
  )
} 