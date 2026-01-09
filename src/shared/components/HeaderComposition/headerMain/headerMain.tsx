"use client"

import { useState } from "react"
import { HeaderSearchWrapper } from "../headerSearchWrapper/headerSearchWrapper"
import { Input } from "../input/input"
import { Root } from "../root/root"
import { SearchInputButton } from "../searchInput/searchInputButton"
import { HeaderContent } from "../headerContent/headerContent"
import { FilterMovies } from "../filter/filterMovies"

/**
 * HeaderMain - Componente principal do header usando o padrão de composição
 * 
 * Este componente engloba todas as partes de header.
 * Utiliza o estado local para controlar o valor da busca,
 * repassando-os para os componentes de input e botão
 * 
 * @returns {JSX.Element}
 */

export function HeaderMain() {

  const [search, setSearch] = useState('');

  return (
    <Root>
      <HeaderContent>
        <HeaderSearchWrapper>
          <Input
            value={search}
            onValueChange={setSearch}
            onSubmit={() => console.log(search)}
            />
            <SearchInputButton
              onClick={() => console.log(search)}  
            />
        </HeaderSearchWrapper>
        <FilterMovies />
      </HeaderContent>
    </Root>
  )
}
